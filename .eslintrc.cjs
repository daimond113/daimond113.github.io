module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: [
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
    "plugin:solid/typescript",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    // ...
  ],
}
