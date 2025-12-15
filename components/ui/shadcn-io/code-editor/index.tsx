"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useTheme } from "next-themes";

type CopyButtonProps = {
  content: string;
  className?: string;
};

function CopyButton({ content, className }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "h-6 w-6 flex items-center justify-center rounded-md transition-colors",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        className
      )}
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

type CodeEditorProps = {
  children: string;
  lang?: string;
  title?: string;
  icon?: React.ReactNode;
  writing?: boolean;
  duration?: number; // seconds
  className?: string;
};

export function CodeEditor({
  children: code,
  lang = "ts",
  title = "index.ts",
  icon,
  writing = true,
  duration = 0.6,
  className,
}: CodeEditorProps) {
  const { resolvedTheme } = useTheme();

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const typingIntervalRef = React.useRef<number | null>(null);
  const cancelledRef = React.useRef(false);

  const [isReady, setIsReady] = React.useState(false);

  // Cleaned code string is stored here after dedenting
  const cleanedCodeRef = React.useRef(code);

  React.useEffect(() => {
    cancelledRef.current = false;

    // --- NEW DEDENT LOGIC ---
    // 1. Split by lines
    const lines = code.split("\n");
    // 2. Find the indentation of the first non-empty line after the first line (to ignore leading/trailing newline)
    const firstNonEmptyLine = lines
      .slice(1)
      .find((line) => line.trim().length > 0);
    const leadingSpacesMatch = firstNonEmptyLine
      ? firstNonEmptyLine.match(/^(\s+)/)
      : null;
    const leadingSpaces = leadingSpacesMatch ? leadingSpacesMatch[1] : "";

    // 3. Remove leading/trailing empty lines and the common indentation
    const dedentedCode = lines
      .map((line) => line.replace(new RegExp(`^${leadingSpaces}`), ""))
      .join("\n")
      .trim(); // Trim final leading/trailing newlines

    cleanedCodeRef.current = dedentedCode;
    // --- END DEDENT LOGIC ---

    const run = async () => {
      if (!containerRef.current) return;

      const finalCode = cleanedCodeRef.current;

      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(finalCode, {
          // Use the cleaned code
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: resolvedTheme === "dark" ? "dark" : "light",
        });

        if (cancelledRef.current || !containerRef.current) return;

        // 1. Inject highlighted HTML once (This provides the structure)
        containerRef.current.innerHTML = html;

        if (!writing) {
          setIsReady(true);
          return;
        }

        /* ---------------- DOM typing logic ---------------- */

        // 2. Find all Text Nodes, save their content, and empty them.
        const textNodes: Array<{ node: Text; text: string }> = [];
        const walker = document.createTreeWalker(
          containerRef.current,
          NodeFilter.SHOW_TEXT
        );

        let current: Node | null = walker.nextNode();
        while (current) {
          const textNode = current as Text;
          const text = textNode.nodeValue ?? "";

          if (text.length > 0) {
            textNodes.push({ node: textNode, text });
            textNode.nodeValue = ""; // Empty the content!
          }

          current = walker.nextNode();
        }

        setIsReady(true); // Content structure is ready and empty

        const totalChars = textNodes.reduce(
          (sum, item) => sum + item.text.length,
          0
        );

        if (totalChars === 0) return;

        const intervalMs = (duration * 1000) / totalChars;

        // 3. Setup Cursor
        const pre = containerRef.current.querySelector("pre");
        const cursor = document.createElement("span");
        cursor.textContent = "|";
        cursor.className = "ml-0.5 animate-pulse text-foreground/50 font-bold";
        pre?.appendChild(cursor);

        let nodeIndex = 0;
        let charIndex = 0;

        // 4. Run Typing Animation
        typingIntervalRef.current = window.setInterval(() => {
          if (cancelledRef.current) return;

          const currentItem = textNodes[nodeIndex];
          if (!currentItem) {
            // Typing finished
            window.clearInterval(typingIntervalRef.current!);
            cursor.remove(); // Remove cursor
            return;
          }

          // Type next character directly into the Text Node
          currentItem.node.nodeValue += currentItem.text.charAt(charIndex);

          charIndex++;

          // Move to the next Text Node if the current one is finished
          if (charIndex >= currentItem.text.length) {
            nodeIndex++;
            charIndex = 0;
          }

          // Scroll to keep the text visible
          if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          }
        }, intervalMs);
      } catch (err) {
        console.error("CodeEditor highlight failed:", err);
      }
    };

    run();

    return () => {
      cancelledRef.current = true;
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [code, lang, writing, duration, resolvedTheme]);

  return (
    <div
      className={cn(
        "relative flex flex-col w-full max-w-150 overflow-hidden",
        "rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="relative flex h-10 shrink-0 items-center justify-between border-b border-border bg-muted/50 px-3">
        {/* Dots */}
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>

        {/* Title / Icon (Centered Absolutely) */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-xs font-medium text-muted-foreground">
          {icon && <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>}
          <span>{title}</span>
        </div>

        {/* Copy Button (Uses the original, un-dedented 'code' for clean copy) */}
        {/* <CopyButton content={code} /> */}
      </div>

      {/* Code Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto py-4 text-[13px] font-mono leading-relaxed"
      >
        <div className="px-4">
          <div
            ref={containerRef}
            className={cn(
              "transition-opacity duration-300",
              isReady ? "opacity-100" : "opacity-0",
              // Fixed CSS to force Shiki background transparency
              "[&>pre]:bg-transparent! [&>pre]:p-0!"
            )}
          />
        </div>
      </div>
    </div>
  );
}
