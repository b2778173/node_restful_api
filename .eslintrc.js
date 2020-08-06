module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': ['error'], // 表示被prettier标记的地方抛出错误信息。
    'func-names': ['warn', 'never'],
    'no-console': 'off',
  },
};
