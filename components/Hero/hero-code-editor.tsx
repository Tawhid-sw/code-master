import { CodeEditor } from "@/components/ui/code-editor";
import { Settings } from "lucide-react";

export const HeroCodeEditorDemo = () => {
  return (
    <div className="relative">
      <CodeEditor
        writing={true}
        lang="javascript"
        title="carrer.ts"
        icon={<Settings />}
        duration={3}
        className="min-w-116 h-116"
      >
        {`function FutureBuilder(): JSX.Element {
          const frameworks = [
            "React",
            "Next.js",
            "TypeScript",
            "shadcn/ui",
            "TanStack",
            "Tailwind",
            "Framer Motion"
          ];

          return (
            <main className="future">
              <h1>Build What Matters</h1>
              <p>Clean code. Strong foundations. Real impact.</p>
            </main>
            );
          }`}
      </CodeEditor>
    </div>
  );
};
