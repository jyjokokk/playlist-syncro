module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // Leave the rules below as is
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/array-type': 'off',
    // '@typescript-eslint/no-extraneous-class': ['warn', {'allowEmpty':}],
    '@typescript-eslint/no-extraneous-class': 'off'
  }
}

// module.exports = {
//   root: true,
//   env: {
//     es2021: true,
//     node: true,
//     jest: true
//   },
//   extends: [
//     'standard-with-typescript',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     'plugin:@typescript-eslint/strict',
//     'prettier'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     tsconfigRootDir: __dirname,
//     project: ['./tsconfig.json']
//   },
//   plugins: ['@typescript-eslint'],
//   rules: {
//     '@typescript-eslint/strict-boolean-expressions': 'off',
//     '@typescript-eslint/no-unnecessary-condition': 'off',
//     '@typescript-eslint/no-unsafe-member-access': 'warn',
//     '@typescript-eslint/no-unsafe-return': 'warn',
//     '@typescript-eslint/no-unsafe-argument': 'warn',
//     '@typescript-eslint/no-unsafe-assignment': 'warn',
//     '@typescript-eslint/no-unsafe-call': 'warn',
//     '@typescript-eslint/consistent-type-imports': 'off',
//     '@typescript-eslint/consistent-type-exports': 'warn',

//     // Leave the rules below as is
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'error',
//     // '@typescript-eslint/no-explicit-any': 'error',
//     '@typescript-eslint/array-type': 'off',
//     '@typescript-eslint/prefer-nullish-coalescing': 'off',
//     'func-style': ['error', 'declaration', { allowArrowFunctions: false }],

//     // älä mielellään muuta tätä, kirjoita koodia useampaan tiedostoon
//     'max-lines': [
//       'error',
//       { max: 1000, skipBlankLines: false, skipComments: true }
//     ]
//   }
// }
