import { CodeEditor } from "@/components/ui/code-editor";

export const HeroCodeEditorDemo = () => {
  return (
    <div className="relative">
      <CodeEditor
        writing={true}
        lang="javascript"
        title="carrer.ts"
        duration={2}
        className="lg:h-116 md:h-136 lg:text-[13px] md:text-base text-xs max-sm:w-88 md:min-w-120"
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
