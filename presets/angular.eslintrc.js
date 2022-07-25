// JS + Import + TS + Setup for TS support in Import plugin
// Peer dependencies:
// - eslint
// - eslint-plugin-import
// - @typescript-eslint/eslint-plugin
// - @typescript-eslint/parser
// - eslint-import-resolver-typescript
// ng add @angular-eslint/schematics

// If having problems linting templates
// https://github.com/angular-eslint/angular-eslint#linting-html-files-and-inline-templates-with-the-vscode-extension-for-eslint
export default {
	extends: [
		'./ts.eslintrc.js',
		'./rules/rxjs.eslintrc.js',
		'./rules/rxjs-angular.eslintrc.js'
	],
	overrides: [{
		files: ['*.ts'],
		extends: [
			'../rules/angular.eslintrc.js'
		]
	}, {
		files: ['*.html'],
		extends: [
			'../rules/angular-template.eslintrc.js'
		],
	}]
};
