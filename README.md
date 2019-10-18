# eslint-config-uncley

ESLint Config of Netease/GUX/Uncle-Y

## Usage

Install ESLint and plugins

Javascript

```
npm i -D eslint babel-eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react
```

Add ESLint config file  `.eslintrc.js`

```javascript
module.exports = {
    extends: [
        'uncley',
        'uncley/react' // Using it f you using react.
    ],
    rules: [
        // Write custom rules here.
    ]
}
```

With vscode, set `'editor.formatOnSave': true`