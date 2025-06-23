import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // 'react-hooks/exhaustive-deps': 'off',
      // Enable file path and case sensitivity checks:
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'import/no-named-as-default-member': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-unassigned-import': 'warn',
      'import/no-cycle': 'warn',
      'import/no-useless-path-segments': 'warn',
      'import/no-self-import': 'warn',
      'import/no-relative-parent-imports': 'off',
      // This checks for case-sensitive paths (important on some OS)
      'import/no-case-sensitive-paths': 'error',
    },
  }
);
