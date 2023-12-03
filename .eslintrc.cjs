module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    indent: [1, 2, { SwitchCase: 1, VariableDeclarator: 1 }],
    'max-len': [0, 200, 4],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  },
}
