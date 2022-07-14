const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	// https://github.com/typescript-eslint/typescript-eslint @ 5.30.6
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		// Supported Rules
		'@typescript-eslint/adjacent-overload-signatures': error, // Require that member overloads be consecutive
		'@typescript-eslint/array-type': [error, {'default': 'array'}], // Require using either T[] or Array<T> for arrays
		'@typescript-eslint/await-thenable': error, // Disallow awaiting a value that is not a Thenable
		'@typescript-eslint/ban-ts-comment': error, // Disallow @ts-<directive> comments or require descriptions after directive
		'@typescript-eslint/ban-tslint-comment': error, // Disallow // tslint:<rule-flag> comments
		'@typescript-eslint/ban-types': error, // Disallow certain types
		'@typescript-eslint/class-literal-property-style': [error, 'fields'], // Enforce that literals on classes are exposed in a consistent style
		'@typescript-eslint/consistent-generic-constructors': [error, 'constructor'], // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
		'@typescript-eslint/consistent-indexed-object-style': [error, 'record'], // Require or disallow the Record type
		'@typescript-eslint/consistent-type-assertions': [error, {'assertionStyle': 'as', 'objectLiteralTypeAssertions': 'never'}], // Enforce consistent usage of type assertions
		'@typescript-eslint/consistent-type-definitions': [error, 'interface'], // Enforce type definitions to consistently use either interface or type
		'@typescript-eslint/consistent-type-exports': [error, {'fixMixedExportsWithInlineTypeSpecifier': true}], // Enforce consistent usage of type exports
		'@typescript-eslint/consistent-type-imports': [error, {'prefer': 'type-imports'}], // Enforce consistent usage of type imports
		'@typescript-eslint/explicit-function-return-type': [error, {'allowExpressions': true}], // Require explicit return types on functions and class methods
		'@typescript-eslint/explicit-member-accessibility': error, // Require explicit accessibility modifiers on class properties and methods
		'@typescript-eslint/explicit-module-boundary-types': error, // Require explicit return and argument types on exported functions' and classes' public class methods
		'@typescript-eslint/member-delimiter-style': error, // Require a specific member delimiter style for interfaces and type literals
		'@typescript-eslint/member-ordering': [error, {'default': {'memberTypes': [ // Require a consistent member declaration order
			'signature',

			'public-static-field',
			'protected-static-field',
			'private-static-field',
		
			'public-decorated-field',
			'protected-decorated-field',
			'private-decorated-field',
		
			'public-instance-field',
			'protected-instance-field',
			'private-instance-field',
		
			'public-abstract-field',
			'protected-abstract-field',
			'private-abstract-field',
		
			'public-field',
			'protected-field',
			'private-field',
		
			'static-field',
			'instance-field',
			'abstract-field',
		
			'decorated-field',
		
			'field',
		
			'public-constructor',
			'protected-constructor',
			'private-constructor',
		
			'constructor',

			'public-static-get',
			'protected-static-get',
			'private-static-get',
		
			'public-decorated-get',
			'protected-decorated-get',
			'private-decorated-get',
		
			'public-instance-get',
			'protected-instance-get',
			'private-instance-get',
		
			'public-abstract-get',
			'protected-abstract-get',
			'private-abstract-get',
		
			'public-get',
			'protected-get',
			'private-get',
		
			'static-get',
			'instance-get',
			'abstract-get',
		
			'decorated-get',
		
			'get',

			'public-static-set',
			'protected-static-set',
			'private-static-set',
		
			'public-decorated-set',
			'protected-decorated-set',
			'private-decorated-set',
		
			'public-instance-set',
			'protected-instance-set',
			'private-instance-set',
		
			'public-abstract-set',
			'protected-abstract-set',
			'private-abstract-set',
		
			'public-set',
			'protected-set',
			'private-set',
		
			'static-set',
			'instance-set',
			'abstract-set',
		
			'decorated-set',
		
			'set',

			'public-static-method',
			'protected-static-method',
			'private-static-method',
		
			'public-decorated-method',
			'protected-decorated-method',
			'private-decorated-method',
		
			'public-instance-method',
			'protected-instance-method',
			'private-instance-method',
		
			'public-abstract-method',
			'protected-abstract-method',
			'private-abstract-method',
		
			'public-method',
			'protected-method',
			'private-method',
		
			'static-method',
			'instance-method',
			'abstract-method',
		
			'decorated-method',
		
			'method'
			], 'order': 'alphabetically'}}],
		'@typescript-eslint/method-signature-style': [error, 'property'], // Enforce using a particular method signature syntax
		'@typescript-eslint/naming-convention': [error, // Enforce naming conventions for everything across a codebase
			{'selector': 'default', 'format': ['camelCase']},
			{'selector': 'variable', 'format': ['camelCase', 'UPPER_CASE']},
			{'selector': 'parameter', 'format': ['camelCase'], 'leadingUnderscore': 'allow'},
			{'selector': 'memberLike', 'modifiers': ['private'], 'format': ['camelCase'], 'leadingUnderscore': 'require'},
			{'selector': 'typeLike', 'format': ['PascalCase']},
			{'selector': 'interface', 'format': ['PascalCase'], 'prefix': ['I']}
		],
		'@typescript-eslint/no-base-to-string': error, // Require .toString() to only be called on objects which provide useful information when stringified
		'@typescript-eslint/no-confusing-non-null-assertion': error, // Disallow non-null assertion in locations that may be confusing
		'@typescript-eslint/no-confusing-void-expression': 'off', // Require expressions of type void to appear in statement position
		'@typescript-eslint/no-duplicate-enum-values': error, // Disallow duplicate enum member values
		'@typescript-eslint/no-dynamic-delete': error, // Disallow using the delete operator on computed key expressions
		'@typescript-eslint/no-empty-interface': error, // Disallow the declaration of empty interfaces
		'@typescript-eslint/no-explicit-any': error, // Disallow the any type
		'@typescript-eslint/no-extra-non-null-assertion': error, // Disallow extra non-null assertion
		'@typescript-eslint/no-extraneous-class': error, // Disallow classes used as namespaces
		'@typescript-eslint/no-floating-promises': error, // Require Promise-like statements to be handled appropriately
		'@typescript-eslint/no-for-in-array': error, // Disallow iterating over an array with a for-in loop
		'@typescript-eslint/no-inferrable-types': error, // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
		'@typescript-eslint/no-invalid-void-type': error, // Disallow void type outside of generic or return types
		'@typescript-eslint/no-meaningless-void-operator': error, // Disallow the void operator except when used to discard a value
		'@typescript-eslint/no-misused-new': error, // Enforce valid definition of new and constructor
		'@typescript-eslint/no-misused-promises': error, // Disallow Promises in places not designed to handle them
		'@typescript-eslint/no-namespace': error, // Disallow custom TypeScript modules and namespaces
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': error, // Disallow non-null assertions in the left operand of a nullish coalescing operator
		'@typescript-eslint/no-non-null-asserted-optional-chain': error, // Disallow non-null assertions after an optional chain expression
		'@typescript-eslint/no-non-null-assertion': error, // Disallow non-null assertions using the ! postfix operator
		'@typescript-eslint/no-redundant-type-constituents': error, // Disallow members of unions and intersections that do nothing or override type information
		'@typescript-eslint/no-require-imports': error, // Disallow invocation of require()
		'@typescript-eslint/no-this-alias': error, // Disallow aliasing this
		'@typescript-eslint/no-type-alias': error, // Disallow type aliases
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': error, // Disallow unnecessary equality comparisons against boolean literals
		'@typescript-eslint/no-unnecessary-condition': error, // Disallow conditionals where the type is always truthy or always falsy
		'@typescript-eslint/no-unnecessary-qualifier': error, // Disallow unnecessary namespace qualifiers
		'@typescript-eslint/no-unnecessary-type-arguments': error, // Disallow type arguments that are equal to the default
		'@typescript-eslint/no-unnecessary-type-assertion': error, // Disallow type assertions that do not change the type of an expression
		'@typescript-eslint/no-unnecessary-type-constraint': error, // Disallow unnecessary constraints on generic types
		'@typescript-eslint/no-unsafe-argument': error, // Disallow calling a function with a value with type any
		'@typescript-eslint/no-unsafe-assignment': error, // Disallow assigning a value with type any to variables and properties
		'@typescript-eslint/no-unsafe-call': error, // Disallow calling a value with type any
		'@typescript-eslint/no-unsafe-member-access': error, // Disallow member access on a value with type any
		'@typescript-eslint/no-unsafe-return': error, // Disallow returning a value with type any from a function
		'@typescript-eslint/no-useless-empty-export': error, // Disallow empty exports that don't change anything in a module file
		'@typescript-eslint/no-var-requires': error, // Disallow require statements except in import statements
		'@typescript-eslint/non-nullable-type-assertion-style': error, // Enforce non-null assertions over explicit type casts
		'@typescript-eslint/parameter-properties': 'off', // Require or disallow parameter properties in class constructors
		'@typescript-eslint/prefer-as-const': error, // Enforce the use of as const over literal type
		'@typescript-eslint/prefer-enum-initializers': error, // Require each enum member value to be explicitly initialized
		'@typescript-eslint/prefer-for-of': error, // Enforce the use of for-of loop over the standard for loop where possible
		'@typescript-eslint/prefer-function-type': error, // Enforce using function types instead of interfaces with call signatures
		'@typescript-eslint/prefer-includes': error, // Enforce includes method over indexOf method
		'@typescript-eslint/prefer-literal-enum-member': error, // Require all enum members to be literal values
		'@typescript-eslint/prefer-namespace-keyword': error, // Require using namespace keyword over module keyword to declare custom TypeScript modules
		'@typescript-eslint/prefer-nullish-coalescing': error, // Enforce using the nullish coalescing operator instead of logical chaining
		'@typescript-eslint/prefer-optional-chain': error, // Enforce using concise optional chain expressions instead of chained logical ands
		'@typescript-eslint/prefer-readonly': error, // Require private members to be marked as readonly if they're never modified outside of the constructor
		'@typescript-eslint/prefer-readonly-parameter-types': 'off', // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
		'@typescript-eslint/prefer-reduce-type-parameter': error, // Enforce using type parameter when calling Array#reduce instead of casting
		'@typescript-eslint/prefer-regexp-exec': error, // Enforce RegExp#exec over String#match if no global flag is provided
		'@typescript-eslint/prefer-return-this-type': error, // Enforce that this is used when only this type is returned
		'@typescript-eslint/prefer-string-starts-ends-with': error, // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
		'@typescript-eslint/prefer-ts-expect-error': error, // Enforce using @ts-expect-error over @ts-ignore
		'@typescript-eslint/promise-function-async': error, // Require any function or method that returns a Promise to be marked async
		'@typescript-eslint/require-array-sort-compare': error, // Require Array#sort calls to always provide a compareFunction
		'@typescript-eslint/restrict-plus-operands': error, // Require both operands of addition to have type number or string
		'@typescript-eslint/restrict-template-expressions': error, // Enforce template literal expressions to be of string type
		'@typescript-eslint/sort-type-union-intersection-members': error, // Enforce members of a type union/intersection to be sorted alphabetically
		'@typescript-eslint/strict-boolean-expressions': error, // Disallow certain types in boolean expressions
		'@typescript-eslint/switch-exhaustiveness-check': error, // Require switch-case statements to be exhaustive with union type
		'@typescript-eslint/triple-slash-reference': error, // Disallow certain triple slash directives in favor of ES6-style import declarations
		'@typescript-eslint/type-annotation-spacing': [error, {'before': false, 'after': true}], // Require consistent spacing around type annotations
		'@typescript-eslint/typedef': 'off', // Require type annotations in certain places
		'@typescript-eslint/unbound-method': error, // Enforce unbound methods are called with their expected scope
		'@typescript-eslint/unified-signatures': error, // Disallow two overloads that could be unified into one with a union or an optional/rest parameter



		// Extension Rules - These rules from ESLint need to be disabled, since their handled by TS ESLint instead
		'brace-style': 'off',                       '@typescript-eslint/brace-style': [error, '1tbs'], // Enforce consistent brace style for blocks
		'comma-dangle': 'off',                      '@typescript-eslint/comma-dangle': [error, 'never'], // Require or disallow trailing commas
		'comma-spacing': 'off',                     '@typescript-eslint/comma-spacing': [error, {'before': false, 'after': true}], // Enforce consistent spacing before and after commas
		'default-param-last': 'off',                '@typescript-eslint/default-param-last': error, // Enforce default parameters to be last
		'dot-notation': 'off',                      '@typescript-eslint/dot-notation': error, // Enforce dot notation whenever possible
		'func-call-spacing': 'off',                 '@typescript-eslint/func-call-spacing': [error, 'never'], // Require or disallow spacing between function identifiers and their invocations
		'indent': 'off',                            '@typescript-eslint/indent': [error, 'tab'], // Enforce consistent indentation
													'@typescript-eslint/init-declarations': 'off', // Require or disallow initialization in variable declarations
		'keyword-spacing': 'off',                   '@typescript-eslint/keyword-spacing': [error, {'before': true, 'after': true}], // Enforce consistent spacing before and after keywords
													'@typescript-eslint/lines-between-class-members': 'off', // Require or disallow an empty line between class members
		'no-array-constructor': 'off',              '@typescript-eslint/no-array-constructor': error, // Disallow generic Array constructors
		'no-dupe-class-members': 'off',             '@typescript-eslint/no-dupe-class-members': error, // Disallow duplicate class members
		'no-duplicate-imports': 'off',              '@typescript-eslint/no-empty-function': error, // Disallow empty functions
		'no-empty-function': 'off',                 '@typescript-eslint/no-extra-parens': [error, 'all', {'ignoreJSX': 'multi-line', 'enforceForArrowConditionals': false}], // Disallow unnecessary parentheses
		'no-extra-parens': 'off',                   '@typescript-eslint/no-extra-semi': error, // Disallow unnecessary semicolons
		'no-extra-semi': 'off',                     '@typescript-eslint/no-implied-eval': error, // Disallow the use of eval()-like methods
		'no-implied-eval': 'off',                   '@typescript-eslint/no-invalid-this': error, // Disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 'off',                   '@typescript-eslint/no-loop-func': error, // Disallow function declarations that contain unsafe references inside loop statements
		'no-loop-func': 'off',                      '@typescript-eslint/no-loss-of-precision': error, // Disallow literal numbers that lose precision
		'no-loss-of-precision': 'off',              '@typescript-eslint/no-magic-numbers': 'off', // Disallow magic numbers
		'no-magic-numbers': 'off',                  '@typescript-eslint/no-redeclare': error, // Disallow variable redeclaration
		'no-redeclare': 'off',                      '@typescript-eslint/no-restricted-imports': 'off', // Disallow specified modules when loaded by import
		'no-shadow': 'off',                         '@typescript-eslint/no-shadow': [error, {'builtinGlobals': true, 'hoist': 'all'}], // Disallow variable declarations from shadowing variables declared in the outer scope
		'no-throw-literal': 'off',                  '@typescript-eslint/no-throw-literal': error, // Disallow throwing literals as exceptions
		'no-unused-expressions': 'off',             '@typescript-eslint/no-unused-expressions': [error, {'enforceForJSX': true}], // Disallow unused expressions
		'no-unused-vars': 'off',                    '@typescript-eslint/no-unused-vars': error, // Disallow unused variables
													'@typescript-eslint/no-use-before-define': 'off', // Disallow the use of variables before they are defined
		'no-useless-constructor': 'off',            '@typescript-eslint/no-useless-constructor': error, // Disallow unnecessary constructors
		'object-curly-spacing': 'off',              '@typescript-eslint/object-curly-spacing': [error, 'never'], // Enforce consistent spacing inside braces
													'@typescript-eslint/padding-line-between-statements': 'off', // Require or disallow padding lines between statements
		'quotes': 'off',                            '@typescript-eslint/quotes': [error, 'single'], // Enforce the consistent use of either backticks, double, or single quotes
		'require-await': 'off',                     '@typescript-eslint/require-await': error, // Disallow async functions which have no await expression
													'@typescript-eslint/return-await': 'off', // Enforce consistent returning of awaited values
		'semi': 'off',                              '@typescript-eslint/semi': [error, 'always'], // Require or disallow semicolons instead of ASI
		'space-before-blocks': 'off',               '@typescript-eslint/space-before-blocks': [error], //Enforces consistent spacing before blocks
		'space-before-function-paren': 'off',       '@typescript-eslint/space-before-function-paren': [error, { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}], // Enforce consistent spacing before function parenthesis
													'@typescript-eslint/space-infix-ops': 'off' // Require spacing around infix operators
	}
}