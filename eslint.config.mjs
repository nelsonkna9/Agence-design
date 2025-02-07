import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': 'warn', // Avertit en cas d'utilisation de console.log
      'no-unused-vars': 'warn', // Avertit en cas de variables non utilisées
      '@next/next/no-html-link-for-pages': 'off', // Désactive une règle spécifique à Next.js
      'prettier/prettier': 'error', // Active Prettier comme règle ESLint
    },
  },
];

export default eslintConfig;
