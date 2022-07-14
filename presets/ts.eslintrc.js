export default {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'../rules/.eslintrc.js',
		'../rules/ts.eslintrc.js'
	]
};
