# eslint-config-uncley

ESLint Config of Netease/GUX/Uncle-Y

## Usage

Install ESLint and plugins

For Javascript

```
npm i -D eslint babel-eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react
```

For Typescript

```
// Coming soon.
```

Install this config

```
npm i -D eslint-config-uncley
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

With vscode, modify the settings.json
```
{
    "editor.formatOnSave": false,
    "eslint.autoFixOnSave": true,
    "eslint.trace.server": "messages",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```