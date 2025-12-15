import prettier from "prettier/standalone";
import parserTypescript from "prettier/plugins/typescript";
import parserBabel from "prettier/plugins/babel";

export function formatCode(code: string, lang: string): string {
  try {
    return prettier.format(code, {
      parser:
        lang === "ts" || lang === "tsx"
          ? "typescript"
          : lang === "js" || lang === "jsx"
            ? "babel"
            : "babel",
      plugins: [parserTypescript, parserBabel],
      semi: true,
      singleQuote: false,
      trailingComma: "all",
      tabWidth: 2,
      printWidth: 80,
    });
  } catch (e) {
    console.warn("Prettier formatting failed:", e);
    return code;
  }
}
