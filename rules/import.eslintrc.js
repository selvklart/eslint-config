const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	// https://github.com/import-js/eslint-plugin-import @ v2.25.2
	plugins: ['import'],
	rules: {
		'import/no-unresolved': error, // Ensure imports point to a file/module that can be resolved.
		'import/named': error, // Ensure named imports correspond to a named export in the remote file.
		'import/default': error, // Ensure a default export is present, given a default import.
		'import/namespace': error, // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
		'import/no-restricted-paths': 'off', // Restrict which files can be imported in a given folder
		'import/no-absolute-path': error, // Forbid import of modules using absolute paths
		'import/no-dynamic-require': error, // Forbid require() calls with expressions
		'import/no-internal-modules': 'off', // Prevent importing the submodules of other modules
		'import/no-webpack-loader-syntax': error, // Forbid webpack loader syntax in imports
		'import/no-self-import': error, // Forbid a module from importing itself
		'import/no-cycle': error, // Forbid a module from importing a module with a dependency path back to itself
		'import/no-useless-path-segments': [error, {'noUselessIndex': true}], // Prevent unnecessary path segments in import and require statements
		'import/no-relative-parent-imports': 'off', // Forbid importing modules from parent directories
		'import/no-relative-packages': 'off', // Prevent importing packages through relative paths
		'import/export': error, // Report any invalid exports, i.e. re-export of the same name
		'import/no-named-as-default': error, // Report use of exported name as identifier of default export
		'import/no-named-as-default-member': error, // Report use of exported name as property of default export
		'import/no-deprecated': error, // Report imported names marked with @deprecated documentation tag
		'import/no-extraneous-dependencies': error, // Forbid the use of extraneous packages
		'import/no-mutable-exports': error, // Forbid the use of mutable exports with var or let.
		'import/no-unused-modules': 'off', // Report modules without exports, or exports without matching import in another module
		'import/unambiguous': error, // Report potentially ambiguous parse goal (script vs. module)
		'import/no-commonjs': error, // Report CommonJS require calls and module.exports or exports.*.
		'import/no-amd': error, // Report AMD require and define calls.
		'import/no-nodejs-modules': 'off', // No Node.js builtin modules.
		'import/no-import-module-exports': error, // Forbid imports with CommonJS exports
		'import/first': error, // Ensure all imports appear before other statements
		'import/exports-last': error, // Ensure all exports appear after other statements
		'import/no-duplicates': error, // Report repeated import of the same module in multiple places
		'import/no-namespace': error, // Forbid namespace (a.k.a. 'wildcard' *) imports
		'import/extensions': [error, 'never'], // Ensure consistent use of file extension within the import path
		'import/order': [error, { // Enforce a convention in module import order
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
			'alphabetize': {'order': 'asc', 'caseInsensitive': true},
			'warnOnUnassignedImports': true
		}],
		'import/newline-after-import': [error, {'count': 2}], // Enforce a newline after import statements
		'import/prefer-default-export': 'off', // Prefer a default export if module exports a single name
		'import/max-dependencies': 'off', // Limit the maximum number of dependencies a module can have
		'import/no-unassigned-import': 'off', // Forbid unassigned imports
		'import/no-named-default': error, // Forbid named default exports
		'import/no-default-export': 'off', // Forbid default exports
		'import/no-named-export': 'off', // Forbid named exports
		'import/no-anonymous-default-export': 'off', // Forbid anonymous values as default exports
		'import/group-exports': 'off', // Prefer named exports to be grouped together in a single export declaration
		'import/dynamic-import-chunkname': 'off' // Enforce a leading comment with the webpackChunkName for dynamic imports
	}
}