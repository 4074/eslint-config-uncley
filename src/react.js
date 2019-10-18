module.exports = {
    plugins: ['react'],
    extends: [
        'prettier/react'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/sort-comp': 'off'
    }
}