module.exports = {
    plugins: ['react'],
    extends: [
        'plugin:react/recommended',
        'prettier/react'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        // Jsx off rules
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',

        // Jsx warn rules
        'jsx-a11y/anchor-is-valid': 'warn',

        // React off rules
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/sort-comp': 'off',

        // React warn rules
        'react/no-deprecated': 'warn',
        'react/prefer-stateless-function': 'warn'
    }
}