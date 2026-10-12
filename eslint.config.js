import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/**", ".astro/**", ".husky/**"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  prettier,
);
