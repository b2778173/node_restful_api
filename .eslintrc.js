module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'prettier/prettier': 0, // 表示被prettier标记的地方不抛出错误信息。
        'func-names': ['warn', 'never'],
        'no-console': 'off',
        'space-before-function-paren': ['error', 'always'],
    },
};
