# @selvklart/eslint-config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used internally at Norwegian company Selvklart AS.


## Installation

```
$ npm install --save-dev eslint @selvklart/eslint-config
```

## Usage

### React
```js
{
  "extends": "@selvklart/eslint-config/react",
}
```

### Other projects
Once the `@selvklart/eslint-config` package is installed, you can use it by specifying `@selvklart/eslint-config` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@selvklart/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

ISC © Selvklart AS
