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
npm i -D eslint babel-eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
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
        'uncley/react' // Using if you using react.
        'uncley/typescript' // Using if you using typescript.
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

If you want eslint on git `pre-commit`, install `lint-staged`.

```
npm install --save-dev lint-staged@next
npx mrm lint-staged
```
