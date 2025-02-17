import tsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineFlatConfig } from 'eslint-define-config';
import checkFile from 'eslint-plugin-check-file';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
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
      '@typescript-eslint': tsLint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'check-file': checkFile
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
      ]
    }
  }
]);
