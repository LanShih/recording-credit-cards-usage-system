module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2023,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      { registeredComponentsOnly: true },
    ],
    'vue/no-reserved-component-names': 'error',
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    'vue/no-boolean-default': ['error', 'default-false'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.test.{j,t}s?(x)',
      ],
      rules: { '@typescript-eslint/no-explicit-any': 'off' },
      env: {
        jest: true,
      },
    },
  ],
};
