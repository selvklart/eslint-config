const rules = require('./index');

module.exports = {
	extends: [
		'@escio/eslint-config-escio',
		'plugin:react/recommended'
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		sourceType: 'module'
	},
	rules: {
		"babel/semi": 1,
		"semi": 0
	},
	plugins: [
		"react",
		"babel"
	],
	env: {
		es6: true,
		node: true,
		browser: true
	}
};
