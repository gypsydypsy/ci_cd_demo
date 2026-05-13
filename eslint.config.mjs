import js from "@eslint/js";
import globals from "globals";
import next from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

const config = [
  js.configs.recommended,
  ...next,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];

export default config;

/* npm init @eslint/config@latest pour générer le fichier de config */
