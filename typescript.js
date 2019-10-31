module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-use-before-define': ['error', { 'functions': true, 'classes': false }],
        '@typescript-eslint/no-explicit-any': 'off',
    }
}