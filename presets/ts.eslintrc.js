// JS + Import + TS + Setup for TS support in Import plugin
// Peer dependencies:
// - eslint
// - eslint-plugin-import
// - @typescript-eslint/eslint-plugin
// - @typescript-eslint/parser
// - eslint-import-resolver-typescript
module.exports = {
	extends: [
		'./js.eslintrc.js',
		'../rules/ts.eslintrc.js'
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true,	  
				// if your tsconfig.json isn't in <root>/tsconfig.json, override this in your .eslintrc
				// 'project': 'path/to/folder'
			}
		  }
	}
};
