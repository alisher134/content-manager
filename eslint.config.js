import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'server'],
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  sonarjs.configs.recommended,
  {
    // Type-aware rules for source files
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      unicorn,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- Import Order (Senior Practice) ---
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'], // React and external packages
            ['^@app(/.*|$)', '^@pages(/.*|$)'], // Internal Aliases
            ['^@components(/.*|$)', '^@services(/.*|$)', '^@hooks(/.*|$)'],
            ['^@utils(/.*|$)', '^@types(/.*|$)', '^@assets(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Relative imports
            ['^.+\\.css$'], // Style imports
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // --- No Deep Relative Imports ---
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../*'],
              message: 'Usage of deep relative imports is discouraged. Use path aliases instead.',
            },
          ],
        },
      ],

      // --- Quality & Logic (Unicorn + SonarJS) ---
      'unicorn/filename-case': [
        'error',
        { case: 'pascalCase', ignore: ['main.tsx', 'vite-env.d.ts', 'env.d.ts', 'utils.ts'] },
      ],
      'unicorn/no-null': 'off', // React often uses null
      'unicorn/prevent-abbreviations': 'off',
      'sonarjs/no-duplicate-string': 'warn',

      // --- TypeScript Strictness ---
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    // Rules for config files (no type information required)
    files: ['*.js', '*.ts', 'src/assets/fonts/**/*.js'], // Adjust as needed
    ...tseslint.configs.disableTypeChecked,
  },
  prettier,
  {
    // Architectural Boundaries: components cannot import from pages
    files: ['src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@pages/*', '../pages/*'],
              message: 'Architecture Violation: Shared components cannot import from pages.',
            },
          ],
        },
      ],
    },
  },
  {
    // Architectural Boundaries: hooks cannot import from components
    files: ['src/hooks/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@components/*', '../components/*'],
              message: 'Architecture Violation: Hooks cannot import from components.',
            },
          ],
        },
      ],
    },
  },
);
