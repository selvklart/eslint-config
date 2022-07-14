# @selvklart/eslint-config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used internally at Norwegian company Selvklart AS.

## Installation

```sh
npm install --save-dev eslint @selvklart/eslint-config
```

## Folder structure

### index.js
Base ESLint configuration for just JS. Use one of the presets if you want a more extensive coverage.

### rules/
Collections of curated rulesets for ESLint plugins that are useful for Selvklart.

### presets/
Combinations of multiple ESLint plugins and their configurations so they work together.
Use the one that better applies to your project, or create a new one and make a pull request.

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

## Deployment

Deployment is simple enough that we don't bother with any automation of the process. Just merge your changes to master and use the built in npm tools to tag the new version and publish it. Just remember to push the tag to GitHub when you're done.

```sh
npm version vX.X.X
npm publish
git push --tags origin master
```

Choose a new version number appropriate for your changes, but remember to use semantic versioning. Any changes to the config that are likely to flag errors in code that passed previously should bump the major version.

This means you can usually relax or remove rules while only bumping the minor version, but you should not add a new rule or make an existing one stricter without also bumping the major version.

## License

ISC © Selvklart AS
