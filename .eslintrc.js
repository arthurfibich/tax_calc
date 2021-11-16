module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', 'build/*', '!.prettierrc.js', 'public/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      plugins: ['@typescript-eslint', 'unused-imports'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          },
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/prop-types': 'off',
        'jsx-a11y/no-autofocus': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],

        'react/display-name': ['off', { ignoreTranspilerName: false }],

        'react/react-in-jsx-scope': 'off',

        'import/no-default-export': 'error',
        'import/no-absolute-path': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-empty-function': 'off',

        'import/no-named-as-default-member': 'off',
      },
    },
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
