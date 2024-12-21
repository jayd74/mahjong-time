import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import { fileURLToPath } from 'url';
import path from 'path';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfig,
  ],
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
      },
    ],
    'no-trailing-spaces': ['warn'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});
