// @ts-check

import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-enums': 'error',
    },
  },
  {
    ignores: ['**/dist'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
);
