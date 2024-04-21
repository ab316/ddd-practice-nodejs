module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  ignorePatterns: ['**/dist/*.*'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '_.*', varsIgnorePattern: '_.*' },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
};
