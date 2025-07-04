import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import eslintPluginI18next from 'eslint-plugin-i18next';
import eslintPluginImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';

export default [
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.app.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintPluginImport,
      i18next: eslintPluginI18next,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // TODO: Uncomment this if needed
      // "i18next/no-literal-string": [
      //   "error",
      //   {
      //     mode: "jsx-text-only",
      //     ignore: [
      //       "aria-*",
      //       "data-*",
      //       "id",
      //       "name",
      //       "className",
      //       "role",
      //       "key",
      //       "src",
      //     ],
      //   },
      // ],
      'import/order': [
        'error',
        {
          groups: ['external', 'internal', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react*',
              patternOptions: {
                matchBase: true,
                nocomment: true,
              },
              group: 'external',
              position: 'before',
            },
            {
              pattern: '**/common/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './common/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/app/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './app/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/app/hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './app/hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/assets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './assets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/routes/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './routes/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
