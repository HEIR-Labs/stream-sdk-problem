module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-heir-base',
    'eslint-config-heir-react',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['react-native'],
  },
};
