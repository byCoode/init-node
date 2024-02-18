import { eslintConfigByc, globals } from "@bycoode/eslint-config-byc";

/**
 * @typedef { import("eslint").Linter.FlatConfig } FlatConfig
 * @type { Array<FlatConfig> }
 */
export default [
  ...eslintConfigByc,
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
        ...globals.jest,
      },
    },
  },
];
