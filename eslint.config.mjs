import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    ignores: ["node_modules", "build", "coverage", "config"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
        ...globals.jquery
      },
      parserOptions: {
        project: ["tsconfig.json"],
      },  
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], rules: { ...eslintConfigPrettier.rules } },
  {rules: {"@typescript-eslint/no-unused-expressions": "off"}}
]);
