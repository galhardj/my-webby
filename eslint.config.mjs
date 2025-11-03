import js from "@eslint/js";

export default [
  {
    ignores: [".next/**", "node_modules/**", "**/*.ts", "**/*.tsx"],
  },
  js.configs.recommended,
];
