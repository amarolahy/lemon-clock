import ts from 'typescript-eslint';

export default ts.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  ...ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
);
