module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaVersion: 2021,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
