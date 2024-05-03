import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import ts from "typescript-eslint";

const files = ["src/*_/_.{js,ts,jsx,tsx}"];

export default [
    ...ts.config(js.configs.recommended, ...ts.configs.recommended, {
        files,
    }),
    { ...prettier, files },
];
