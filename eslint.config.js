import tsLintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineFlatConfig } from 'eslint-define-config';
import checkFilePlugin from 'eslint-plugin-check-file';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineFlatConfig([
  {
    ignores: ['./dist']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsParser,
      globals: { ...globals.browser }
    },
    plugins: {
      react,
      '@typescript-eslint': tsLintPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'check-file': checkFilePlugin,
      import: importPlugin
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true
        }
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE'
        },
        {
          ignoreMiddleExtensions: true
        }
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/!(__tests__)': 'KEBAB_CASE'
        }
      ],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // enforce unidirectional codebase
            {
              target: './src/features',
              from: './src/app'
            },
            {
              target: ['./src/components', './src/hooks', './src/lib', './src/types', './src/utils'],
              from: ['./src/features', './src/app']
            }
          ]
        }
      ]
    }
  }
]);
