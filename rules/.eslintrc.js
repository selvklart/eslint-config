const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	// https://github.com/eslint/eslint @ v8.19.0
	rules: {
		// Possible Problems
		'array-callback-return': [error, {'checkForEach': true}], // Enforce return statements in callbacks of array methods
		'constructor-super': error, // Require `super()` calls in constructors
		'for-direction': 'off', // Enforce 'for' loop update clause moving the counter in the right direction.
		'getter-return': error, // Enforce `return` statements in getters
		'no-async-promise-executor': error, // Disallow using an async function as a Promise executor
		'no-await-in-loop': error, // Disallow `await` inside of loops
		'no-class-assign': error, // Disallow reassigning class members
		'no-compare-neg-zero': error, // Disallow comparing against -0
		'no-cond-assign': error, // Disallow assignment operators in conditional expressions
		'no-const-assign': error, //Disallow reassigning `const` variables
		'no-constant-binary-expression': error, //Disallow expressions where the operation doesn't affect the value
		'no-constant-condition': [error, {'checkLoops': false}], // Disallow constant expressions in conditions
		'no-constructor-return': error, // Disallow returning value from constructor
		'no-control-regex': error, // Disallow control characters in regular expressions
		'no-debugger': error, // Disallow the use of `debugger`
		'no-dupe-args': error, // Disallow duplicate arguments in `function` definitions
		'no-dupe-class-members': error, // Disallow duplicate class members
		'no-dupe-else-if': error, // Disallow duplicate conditions in if-else-if chains
		'no-dupe-keys': error, // Disallow duplicate keys in object literals
		'no-duplicate-case': error, // Disallow duplicate case labels
		'no-duplicate-imports': error,  // Disallow duplicate module imports
		'no-empty-character-class': error, // Disallow empty character classes in regular expressions
		'no-empty-pattern': error, // Disallow empty destructuring patterns
		'no-ex-assign': error, // Disallow reassigning exceptions in `catch` clauses
		'no-fallthrough': error, // Disallow fallthrough of `case` statements
		'no-func-assign': error, // Disallow reassigning `function` declarations
		'no-import-assign': error, // Disallow assigning to imported bindings
		'no-inner-declarations': error, // Disallow variable or `function` declarations in nested blocks
		'no-invalid-regexp': error, // Disallow invalid regular expression strings in `RegExp` constructors
		'no-irregular-whitespace': [error, {'skipStrings': false}], // Disallow irregular whitespace
		'no-loss-of-precision': error,  // Disallow literal numbers that lose precision
		'no-misleading-character-class': error, // Disallow characters which are made with multiple code points in character class syntax
		'no-new-symbol': error, // Disallow `new` operators with the `Symbol` object
		'no-obj-calls': error, // Disallow calling global object properties as functions
		'no-promise-executor-return': error, // Disallow returning values from Promise executor functions
		'no-prototype-builtins': 'off', // Disallow calling some `Object.prototype` methods directly on objects
		'no-self-assign': error, // Disallow assignments where both sides are exactly the same
		'no-self-compare': error, // Disallow comparisons where both sides are exactly the same
		'no-setter-return': error, // Disallow returning values from setters
		'no-sparse-arrays': error, // Disallow sparse arrays
		'no-template-curly-in-string': error, // Disallow template literal placeholder syntax in regular strings
		'no-this-before-super': error, // Disallow `this`/`super` before calling `super()` in constructors
		'no-undef': error, // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
		'no-unexpected-multiline': error, // Disallow confusing multiline expressions
		'no-unmodified-loop-condition': error, // Disallow unmodified loop conditions
		'no-unreachable': error, // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
		'no-unreachable-loop': error, // Disallow loops with a body that allows only one iteration
		'no-unsafe-finally': error, // Disallow control flow statements in `finally` blocks
		'no-unsafe-negation': error, // Disallow negating the left operand of relational operators
		'no-unsafe-optional-chaining': [error, {'disallowArithmeticOperators': true}], // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
		'no-unused-private-class-members': error, // Disallow unused private class members
		'no-unused-vars': error,  // Disallow unused variables
		'no-use-before-define': error, // Disallow the use of variables before they are defined
		'no-useless-backreference': error, // Disallow useless backreferences in regular expressions
		'require-atomic-updates': error, // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		'use-isnan': error, // Require calls to `isNaN()` when checking for `NaN`
		'valid-typeof': error, // Enforce comparing `typeof` expressions against valid strings



		// Suggestions
		'accessor-pairs': 'off', // Enforce getter and setter pairs in objects and classes
		'arrow-body-style': [error, 'as-needed'], // Require braces around arrow function bodies
		'block-scoped-var': error, // Enforce the use of variables within the scope they are defined
		'camelcase': error, // Enforce camelcase naming convention,
		'capitalized-comments': 'off', // Enforce or disallow capitalization of the first letter of a comment
		'class-methods-use-this': 'off', // Enforce that class methods utilize `this`
		'complexity': 'off', // Enforce a maximum cyclomatic complexity allowed in a program
		'consistent-return': 'off', // Require `return` statements to either always or never specify values
		'consistent-this': error, // Enforce consistent naming when capturing the current execution context
		'curly': error, // Enforce consistent brace style for all control statements
		'default-case': 'off', // Require `default` cases in `switch` statements
		'default-case-last': error, // Enforce default clauses in switch statements to be last
		'default-param-last': error, // Enforce default parameters to be last
		'dot-notation': error, // Enforce dot notation whenever possible
		'eqeqeq': error, // Require the use of `===` and `!==`
		'func-name-matching': error, // Require function names to match the name of the variable or property to which they are assigned
		'func-names': 'off', // Require or disallow named `function` expressions
		'func-style': [error, 'declaration', {'allowArrowFunctions': true}], // Enforce the consistent use of either `function` declarations or expressions
		'grouped-accessor-pairs': [error, 'getBeforeSet'], // Require grouped accessor pairs in object literals and classes
		'guard-for-in': error, // Require `for-in` loops to include an `if` statement
		'id-denylist': 'off', // Disallow specified identifiers
		'id-length': 'off', // Enforce minimum and maximum identifier lengths
		'id-match': 'off', // Require identifiers to match a specified regular expression
		'init-declarations': 'off', // Require or disallow initialization in variable declarations
		'max-classes-per-file': 'off', // Enforce a maximum number of classes per file
		'max-depth': [error, 4], // Enforce a maximum depth that blocks can be nested
		'max-lines': [error, 300], // Enforce a maximum number of lines per file
		'max-lines-per-function': [error, {'max': 50}], // Enforce a maximum number of lines of code in a function
		'max-nested-callbacks': [error, 3], // Enforce a maximum depth that callbacks can be nested
		'max-params': 'off', // Enforce a maximum number of parameters in function definitions
		'max-statements': [error, 10], // Enforce a maximum number of statements allowed in function blocks
		'multiline-comment-style': [error, 'separate-lines'], // Enforce a particular style for multiline comments
		'new-cap': [error, {'newIsCap': true, 'capIsNew': true, 'properties': true}], // Require constructor names to begin with a capital letter
		'no-alert': error, // Disallow the use of `alert`, `confirm`, and `prompt`
		'no-array-constructor': error,  // Disallow `Array` constructors
		'no-bitwise': error, // Disallow bitwise operators
		'no-caller': error, // Disallow the use of `arguments.caller` or `arguments.callee`
		'no-case-declarations': error, // Disallow lexical declarations in case clauses
		'no-confusing-arrow': [error, {'allowParens': true}], // Disallow arrow functions where they could be confused with comparisons
		'no-console': ['error', {allow: ['warn', 'error']}], // Disallow the use of `console`
		'no-continue': 'off', // Disallow `continue` statements
		'no-delete-var': error, // Disallow deleting variables
		'no-div-regex': error, // Disallow division operators explicitly at the beginning of regular expressions
		'no-else-return': [error, {'allowElseIf': true}], // Disallow `else` blocks after `return` statements in `if` statements
		'no-empty': error, // Disallow empty block statements
		'no-empty-function': error,  // Disallow empty functions
		'no-eq-null': error, // Disallow `null` comparisons without type-checking operators
		'no-eval': error, // Disallow the use of `eval()`
		'no-extend-native': error, // Disallow extending native types
		'no-extra-bind': error, // Disallow unnecessary calls to `.bind()`
		'no-extra-boolean-cast': [error, {'enforceForLogicalOperands': true}], // Disallow unnecessary boolean casts
		'no-extra-label': error, // Disallow unnecessary labels
		'no-extra-semi': error,  // Disallow unnecessary semicolons
		'no-floating-decimal': error, // Disallow leading or trailing decimal points in numeric literals
		'no-global-assign': error, // Disallow assignments to native objects or read-only global variables
		'no-implicit-coercion': error, // Disallow shorthand type conversions
		'no-implicit-globals': [error, {'lexicalBindings': true}], // Disallow declarations in the global scope
		'no-implied-eval': error,  // Disallow the use of `eval()`-like methods
		'no-inline-comments': error, // Disallow inline comments after code
		'no-invalid-this': error,  // Disallow use of `this` in contexts where the value of `this` is `undefined`
		'no-iterator': error, // Disallow the use of the `__iterator__` property
		'no-label-var': error, // Disallow labels that share a name with a variable
		'no-labels': error, // Disallow labeled statements
		'no-lone-blocks': error, // Disallow unnecessary nested blocks
		'no-lonely-if': error, // Disallow `if` statements as the only statement in `else` blocks
		'no-loop-func': error,  // Disallow function declarations that contain unsafe references inside loop statements
		'no-magic-numbers': 'off',  // Disallow magic numbers
		'no-mixed-operators': error, // Disallow mixed binary operators
		'no-multi-assign': error, // Disallow use of chained assignment expressions
		'no-multi-str': error, // Disallow multiline strings
		'no-negated-condition': 'off', // Disallow negated conditions
		'no-nested-ternary': 'off', // Disallow nested ternary expressions
		'no-new': error, // Disallow `new` operators outside of assignments or comparisons
		'no-new-func': error, // Disallow `new` operators with the `Function` object
		'no-new-object': error, // Disallow `Object` constructors
		'no-new-wrappers': error, // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		'no-nonoctal-decimal-escape': error, // Disallow `\8` and `\9` escape sequences in string literals
		'no-octal': error, // Disallow octal literals
		'no-octal-escape': error, // Disallow octal escape sequences in string literals
		'no-param-reassign': [error, {'props': false}], // Disallow reassigning `function` parameters
		'no-plusplus': 'off', // Disallow the unary operators `++` and `--`
		'no-proto': error, // Disallow the use of the `__proto__` property
		'no-redeclare': error,  // Disallow variable redeclaration
		'no-regex-spaces': error, // Disallow multiple spaces in regular expressions
		'no-restricted-exports': 'off', // Disallow specified names in exports
		'no-restricted-globals': 'off', // Disallow specified global variables
		'no-restricted-imports': 'off', // Disallow specified modules when loaded by `import`
		'no-restricted-properties': 'off', // Disallow certain properties on certain objects
		'no-restricted-syntax': 'off', // Disallow specified syntax
		'no-return-assign': [error, 'always'], // Disallow assignment operators in `return` statements
		'no-return-await': 'off', // Disallow unnecessary `return await`
		'no-script-url': error, // Disallow `javascript:` urls
		'no-sequences': [error, {'allowInParentheses': false}], // Disallow comma operators
		'no-shadow': [error, {'builtinGlobals': true, 'hoist': 'all'}],  // Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow-restricted-names': error, // Disallow identifiers from shadowing restricted names
		'no-ternary': 'off', // Disallow ternary operators
		'no-throw-literal': error,  // Disallow throwing literals as exceptions
		'no-undef-init': error, // Disallow initializing variables to `undefined`
		'no-undefined': error, // Disallow the use of `undefined` as an identifier
		'no-underscore-dangle': 'off', // Disallow dangling underscores in identifiers
		'no-unneeded-ternary': [error, {'defaultAssignment': false}], // Disallow ternary operators when simpler alternatives exist
		'no-unused-expressions': [error, {'enforceForJSX': true}],  // Disallow unused expressions
		'no-unused-labels': error, // Disallow unused labels
		'no-useless-call': error, // Disallow unnecessary calls to `.call()` and `.apply()`
		'no-useless-catch': error, // Disallow unnecessary `catch` clauses
		'no-useless-computed-key': [error, {'enforceForClassMembers': true}], // Disallow unnecessary computed property keys in objects and classes
		'no-useless-concat': error, // Disallow unnecessary concatenation of literals or template literals
		'no-useless-constructor': error,  // Disallow unnecessary constructors
		'no-useless-escape': error, // Disallow unnecessary escape characters
		'no-useless-rename': error, // Disallow renaming import, export, and destructured assignments to the same name
		'no-useless-return': error, // Disallow redundant return statements
		'no-var': error, // Require `let` or `const` instead of `var`
		'no-void': error, // Disallow `void` operators
		'no-warning-comments': 'off', // Disallow specified warning terms in comments
		'no-with': error, // Disallow `with` statements
		'object-shorthand': [error, 'always'], // Require or disallow method and property shorthand syntax for object literals
		'one-var': 'off', // Enforce variables to be declared either together or separately in functions
		'one-var-declaration-per-line': [error, 'initializations'], // Require or disallow newlines around variable declarations
		'operator-assignment': [error, 'always'], // Require or disallow assignment operator shorthand where possible
		'prefer-arrow-callback': error, // Require using arrow functions for callbacks
		'prefer-const': error, // Require `const` declarations for variables that are never reassigned after declared
		'prefer-destructuring': 'off', // Require destructuring from arrays and/or objects
		'prefer-exponentiation-operator': error, // Disallow the use of `Math.pow` in favor of the `**` operator
		'prefer-named-capture-group': error, // Enforce using named capture group in regular expression
		'prefer-numeric-literals': 'off', // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		'prefer-object-has-own': error, // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
		'prefer-object-spread': error, // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		'prefer-promise-reject-errors': error, // Require using Error objects as Promise rejection reasons
		'prefer-regex-literals': [error, {'disallowRedundantWrapping': true}], // Disallow use of the `RegExp` constructor in favor of regular expression literals
		'prefer-rest-params': error, // Require rest parameters instead of `arguments`
		'prefer-spread': error, // Require spread operators instead of `.apply()`
		'prefer-template': error, // Require template literals instead of string concatenation
		'quote-props': [error, 'consistent-as-needed'], // Require quotes around object literal property names
		'radix': [error, 'as-needed'], // Enforce the consistent use of the radix argument when using `parseInt()`
		'require-await': error, // Disallow async functions which have no `await` expression
		'require-unicode-regexp': error, // Enforce the use of `u` flag on RegExp
		'require-yield': error, // Require generator functions to contain `yield`
		'sort-imports': 'off', // Enforce sorted import declarations within modules
		'sort-keys': [error, 'asc', {'natural': true}], // Require object keys to be sorted
		'sort-vars': error, // Require variables within the same declaration block to be sorted
		'spaced-comment': [error, 'always'], // Enforce consistent spacing after the `//` or `/*` in a comment
		'strict': error, // Require or disallow strict mode directives
		'symbol-description': error, // Require symbol descriptions
		'vars-on-top': error, // Require `var` declarations be placed at the top of their containing scope
		'yoda': [error, 'never', { 'exceptRange': true }], // Require or disallow 'Yoda' conditions



		// Layout & Formatting
		'array-bracket-newline': [error, 'consistent'], // Enforce linebreaks after opening and before closing array brackets
		'array-bracket-spacing': [error, 'never'], // Enforce consistent spacing inside array brackets
		'array-element-newline': [error, 'consistent'], // Enforce line breaks after each array element
		'arrow-parens': [error, 'always'], // Require parentheses around arrow function arguments
		'arrow-spacing': [error, { // Enforce consistent spacing before and after the arrow in arrow functions
			'before': true,
			'after': true
		}],
		'block-spacing': [error, 'never'], // Disallow or enforce spaces inside of blocks after opening block and before closing block
		'brace-style': [error, '1tbs'],  // Enforce consistent brace style for blocks
		'comma-dangle': [error, 'never'],  // Require or disallow trailing commas
		'comma-spacing': [error, { // Enforce consistent spacing before and after commas
			'before': false,
			'after': true
		}], 
		'comma-style': [error, 'last'], // Enforce consistent comma style
		'computed-property-spacing': [error, 'never', {'enforceForClassMembers': true}], // Enforce consistent spacing inside computed property brackets
		'dot-location': [error, 'property'], // Enforce consistent newlines before and after dots
		'eol-last': [error, 'always'], // Require or disallow newline at the end of files
		'func-call-spacing': [error, 'never'],  // Require or disallow spacing between function identifiers and their invocations
		'function-call-argument-newline': [error, 'consistent'], // Enforce line breaks between arguments of a function call
		'function-paren-newline': [error, 'consistent'], // Enforce consistent line breaks inside function parentheses
		'generator-star-spacing': [error, {'before': true, 'after': false}], // Enforce consistent spacing around `*` operators in generator functions
		'implicit-arrow-linebreak': [error, 'beside'], // Enforce the location of arrow function bodies
		'indent': [error, 'tab'], // Enforce consistent indentation
		'jsx-quotes': [error, 'prefer-double'], // Enforce the consistent use of either double or single quotes in JSX attributes
		'key-spacing': [error, { // Enforce consistent spacing between keys and values in object literal properties
			'afterColon': true,
			'beforeColon': false,
			'mode': 'strict'
		}],
		'keyword-spacing': [error, {'before': true, 'after': true}], // Enforce consistent spacing before and after keywords
		'line-comment-position': [error, {'position': 'above'}], // Enforce position of line comments
		'linebreak-style': [error, 'unix'], // Enforce consistent linebreak style
		'lines-around-comment': 'off', // Require empty lines around comments
		'lines-between-class-members': 'off', // Require or disallow an empty line between class members
		'max-len': [error, {'code': 80, 'tabWidth': 4}], // Enforce a maximum line length
		'max-statements-per-line': [error, {'max': 1}], // Enforce a maximum number of statements allowed per line
		'multiline-ternary': [error, 'always-multiline'], // Enforce newlines between operands of ternary expressions
		'new-parens': error, // Enforce or disallow parentheses when invoking a constructor with no arguments
		'newline-per-chained-call': error, // Require a newline after each call in a method chain
		'no-extra-parens': [error, 'all', {'ignoreJSX': 'multi-line'}], // Disallow unnecessary parentheses
		'no-mixed-spaces-and-tabs': error, // Disallow mixed spaces and tabs for indentation
		'no-multi-spaces': error, // Disallow multiple spaces
		'no-multiple-empty-lines': [error, {'max': 3, 'maxBOF': 0, 'maxEOF': 1}], // Disallow multiple empty lines
		'no-tabs': [error, {'allowIndentationTabs': true}], // Disallow all tabs
		'no-trailing-spaces': error, // Disallow trailing whitespace at the end of lines
		'no-whitespace-before-property': error, // Disallow whitespace before properties
		'nonblock-statement-body-position': [error, 'below'], // Enforce the location of single-line statements
		'object-curly-newline': [error, {'multiline': true}], // Enforce consistent line breaks after opening and before closing braces
		'object-curly-spacing': [error, 'never'], // Enforce consistent spacing inside braces
		'object-property-newline': 'off', // Enforce placing object properties on separate lines
		'operator-linebreak': [error, 'after'], // Enforce consistent linebreak style for operators
		'padded-blocks': [error, 'never'], // Require or disallow padding within blocks
		'padding-line-between-statements': 'off', // Require or disallow padding lines between statements
		'quotes': [error, 'single'],  // Enforce the consistent use of either backticks, double, or single quotes
		'rest-spread-spacing': [error, 'never'], // Enforce spacing between rest and spread operators and their expressions
		'semi': [error, 'always'],  // Require or disallow semicolons instead of ASI
		'semi-spacing': [error, {'before': false, 'after': true}], // Enforce consistent spacing before and after semicolons
		'semi-style': [error, 'last'], // Enforce location of semicolons
		'space-before-blocks': [error, 'always'], // Enforce consistent spacing before blocks
		'space-before-function-paren': [error, { // Enforce consistent spacing before `function` definition opening parenthesis
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}], 
		'space-in-parens': [error, 'never'], // Enforce consistent spacing inside parentheses
		'space-infix-ops': 'off', // Require spacing around infix operators
		'space-unary-ops': [error, {'words': true, 'nonwords': false}], // Enforce consistent spacing before or after unary operators
		'switch-colon-spacing': [error, {'after': true, 'before': false}], // Enforce spacing around colons of switch statements
		'template-curly-spacing': [error, 'never'], // Require or disallow spacing around embedded expressions of template strings
		'template-tag-spacing': [error, 'never'], // Require or disallow spacing between template tags and their literals
		'unicode-bom': error, // Require or disallow Unicode byte order mark (BOM)
		'wrap-iife': [error, 'inside'], // Require parentheses around immediate `function` invocations
		'wrap-regex': 'off', // Require parenthesis around regex literals
		'yield-star-spacing': [error, 'before'] // Require or disallow spacing around the `*` in `yield*` expressions
	}
};