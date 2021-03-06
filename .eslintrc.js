module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/style",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
  ],
  rules: {
    "no-console": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        endOfLine: "auto",
      },
    ],
  },
  plugins: [
    "import",
    "jest",
    "react",
    "jsx-a11y",
    "react-hooks",
    "prettier",
    "html",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: { es6: true, browser: true, node: true, jest: true },
  settings: {
    jest: {
      version: "detect",
    },
    react: {
      version: "detect",
    },
  },
};
