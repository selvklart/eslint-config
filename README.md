# @escio/eslint-config-escio

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used internally at Norwegian company Escio AS.


## Installation

```
$ npm install --save-dev eslint @escio/eslint-config-escio
```

## Usage

### React
```js
{
  "extends": "@escio/eslint-config-escio/react",
}
```

### Other projects
Once the `@escio/eslint-config-escio` package is installed, you can use it by specifying `@escio/eslint-config-escio` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@escio/eslint-config-escio",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

ISC © Escio AS
