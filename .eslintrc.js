module.exports = {
  env: {
    browser: true, // document や console にエラーが出ないようにする
    es6: true,
    node: true,
    // es6から使える let や const にエラーがでないようにする
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
  },
};
