module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-multi-spaces': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'space-before-blocks': 'warn',
    'arrow-spacing': 'warn'
  },
}
