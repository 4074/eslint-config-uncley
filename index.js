const prettierConfig = require('./prettier')

module.exports = {
    parser: 'babel-eslint',
    plugins: ['prettier'],
    extends: [
        'airbnb',
        'prettier'
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            legacyDecorators: true
        },
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': ['error', prettierConfig],

        // Off rules
        'consistent-return': 'off',

        'no-continue': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',

        'import/no-unresolved': 'off',
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',

        // Warn rules
        'max-classes-per-file': 'warn',
    },
    root: true
}