"use client";

import { CodeEditor } from "@/components/ui/shadcn-io/code-editor";
import codeStarter from "../Hero/code-starter.json";
import { Settings } from "lucide-react";

export const CodeEditorStaticDemo = () => {
  console.log(codeStarter);
  return (
    <div className="relative">
      <CodeEditor
        writing={true}
        lang="ts"
        title="tailwind.config.js"
        icon={<Settings />}
        duration={3} // Speed of typing in seconds
      >
        {`    import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }`}
      </CodeEditor>
    </div>
  );
};

export default CodeEditorStaticDemo;
