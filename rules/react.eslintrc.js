const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	// https://github.com/jsx-eslint/eslint-plugin-react @ v7.30.1
	plugins: ['react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		// Supported Rules
		'react/boolean-prop-naming': 'off', // Enforces consistent naming for boolean props
		'react/button-has-type': error, // Forbid 'button' element without an explicit 'type' attribute
		'react/default-props-match-prop-types': error, // Enforce all defaultProps are defined and not 'required' in propTypes.
		'react/destructuring-assignment': [error, 'never'], // Enforce consistent usage of destructuring assignment of props, state, and context
		'react/display-name': error, // Prevent missing displayName in a React component definition
		'react/forbid-component-props': 'off', // Forbid certain props on components
		'react/forbid-dom-props': [error,  {'forbid': ['id', 'style']}], // Forbid certain props on DOM Nodes
		'react/forbid-elements': 'off', // Forbid certain elements
		'react/forbid-foreign-prop-types': error, // Forbid using another component's propTypes
		'react/forbid-prop-types': 'off', // Forbid certain propTypes
		'react/function-component-definition': [error, { // Standardize the way function component get defined
			'namedComponents': 'arrow-function',
			'unnamedComponents': 'arrow-function'
		}],
		'react/hook-use-state': 'off', // Ensure symmetric naming of useState hook value and setter variables
		'react/iframe-missing-sandbox': error, // Enforce sandbox attribute on iframe elements
		'react/no-access-state-in-setstate': error, // Reports when this.state is accessed within setState
		'react/no-adjacent-inline-elements': error, // Prevent adjacent inline elements not separated by whitespace.
		'react/no-array-index-key': error, // Prevent usage of Array index in keys
		'react/no-arrow-function-lifecycle': error, // Lifecycle methods should be methods on the prototype, not class fields
		'react/no-children-prop': error, // Prevent passing of children as props.
		'react/no-danger': error, // Prevent usage of dangerous JSX props
		'react/no-danger-with-children': error, // Report when a DOM element is using both children and dangerouslySetInnerHTML
		'react/no-deprecated': error, // Prevent usage of deprecated methods
		'react/no-did-mount-set-state': 'off', // Prevent usage of setState in componentDidMount
		'react/no-did-update-set-state': 'off', // Prevent usage of setState in componentDidUpdate
		'react/no-direct-mutation-state': error, // Prevent direct mutation of this.state
		'react/no-find-dom-node': error, // Prevent usage of findDOMNode
		'react/no-invalid-html-attribute': 'off', // Forbid attribute with an invalid values`
		'react/no-is-mounted': error, // Prevent usage of isMounted
		'react/no-multi-comp': 'off', // Prevent multiple component definition per file
		'react/no-namespace': error, // Enforce that namespaces are not used in React elements
		'react/no-redundant-should-component-update': error, // Flag shouldComponentUpdate when extending PureComponent
		'react/no-render-return-value': error, // Prevent usage of the return value of React.render
		'react/no-set-state': 'off', // Prevent usage of setState
		'react/no-string-refs': [error, {'noTemplateLiterals': true}], // Prevent string definitions for references and prevent referencing this.refs
		'react/no-this-in-sfc': error, // Report 'this' being used in stateless components
		'react/no-typos': error, // Prevent common typos
		'react/no-unescaped-entities': error, // Detect unescaped HTML entities, which might represent malformed tags
		'react/no-unknown-property': error, // Prevent usage of unknown DOM property
		'react/no-unsafe': [error, {'checkAliases': true}], // Prevent usage of unsafe lifecycle methods
		'react/no-unstable-nested-components': [error, {'allowAsProps': false}], // Prevent creating unstable components inside components
		'react/no-unused-class-component-methods': error, // Prevent declaring unused methods of component class
		'react/no-unused-prop-types': error, // Prevent definitions of unused prop types
		'react/no-unused-state': error, // Prevent definition of unused state fields
		'react/no-will-update-set-state': error, // Prevent usage of setState in componentWillUpdate
		'react/prefer-es6-class': [error, 'always'], // Enforce ES5 or ES6 class for React Components
		'react/prefer-exact-props': 'off', // Prefer exact proptype definitions
		'react/prefer-read-only-props': 'off', // Require read-only props.
		'react/prefer-stateless-function': error, // Enforce stateless components to be written as a pure function
		'react/prop-types': error, // Prevent missing props validation in a React component definition
		'react/react-in-jsx-scope': error, // Prevent missing React when using JSX
		'react/require-default-props': 'off', // Enforce a defaultProps definition for every prop that is not a required prop.
		'react/require-optimization': 'off', // Enforce React components to have a shouldComponentUpdate method
		'react/require-render-return': error, // Enforce ES5 or ES6 class for returning value in render function
		'react/self-closing-comp': error, // Prevent extra closing tags for components without children
		'react/sort-comp': error, // Enforce component methods order
		'react/sort-prop-types': [error, { // Enforce propTypes declarations alphabetical sorting
			'callbacksLast': true,
			'requiredFirst': true,
			'sortShapeProp': true
		}],
		'react/state-in-constructor': [error, 'always'], // State initialization in an ES6 class component should be in a constructor
		'react/static-property-placement': 'off', // Defines where React component static properties should be positioned.
		'react/style-prop-object': error, // Enforce style prop value is an object
		'react/void-dom-elements-no-children': error, // Prevent passing of children to void DOM elements (e.g. <br />).



		// JSX-specific rules
		'react/jsx-boolean-value': [error, 'always'], // Enforce boolean attributes notation in JSX
		'react/jsx-child-element-spacing': 'off', // Ensures inline tags are not rendered without spaces between them
		'react/jsx-closing-bracket-location': [error, 'line-aligned'], // Validate closing bracket location in JSX
		'react/jsx-closing-tag-location': error, // Validate closing tag location for multiline JSX
		'react/jsx-curly-brace-presence': 'off', // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes
		'react/jsx-curly-newline': [error, { // Enforce consistent line breaks inside jsx curly
			'multiline': 'consistent',
			'singleline': 'forbid'
		}],
		'react/jsx-curly-spacing': [error, { // Enforce or disallow spaces inside of curly braces in JSX attributes
			'when': 'never',
			'children': {'when': 'never'},
		}],
		'react/jsx-equals-spacing': [error, 'never'], // Disallow or enforce spaces around equal signs in JSX attributes
		'react/jsx-filename-extension': [error, {'extensions': ['.tsx', '.jsx']}], // Restrict file extensions that may contain JSX
		'react/jsx-first-prop-new-line': [error, 'multiline-multiprop'], // Ensure proper position of the first property in JSX
		'react/jsx-fragments': [error, 'syntax'], // Enforce shorthand or standard form for React fragments
		'react/jsx-handler-names': 'off', // Enforce event handler naming conventions in JSX
		'react/jsx-indent': [error, 'tab', { // Validate JSX indentation
			'checkAttributes': true,
			'indentLogicalExpressions': true
		}],
		'react/jsx-indent-props': [error, 'tab'], // Validate props indentation in JSX
		'react/jsx-key': [error, { // Report missing key props in iterators/collection literals
			'checkFragmentShorthand': true,
			'checkKeyMustBeforeSpread': true
		}],
		'react/jsx-max-depth': 'off', // Validate JSX maximum depth
		'react/jsx-max-props-per-line': [error, {'maximum': 1}], // Limit maximum of props on a single line in JSX
		'react/jsx-newline': 'off', // Require or prevent a new line after jsx elements and expressions.
		'react/jsx-no-bind': 'off', // Prevents usage of Function.prototype.bind and arrow functions in React component props
		'react/jsx-no-comment-textnodes': error, // Comments inside children section of tag should be placed inside braces
		'react/jsx-no-constructed-context-values': error, // Prevents JSX context provider values from taking values that will cause needless rerenders.
		'react/jsx-no-duplicate-props': error, // Enforce no duplicate props
		'react/jsx-no-leaked-render': [error, {'validStrategies': ['ternary', 'coerce']}], // Prevent problematic leaked values from being rendered
		'react/jsx-no-literals': 'off', // Prevent using string literals in React component definition
		'react/jsx-no-script-url': error, // Forbid javascript: URLs
		'react/jsx-no-target-blank': error, // Forbid target='_blank' attribute without rel='noreferrer'
		'react/jsx-no-undef': error, // Disallow undeclared variables in JSX
		'react/jsx-no-useless-fragment': error, // Disallow unnecessary fragments
		'react/jsx-one-expression-per-line': 'off', // Limit to one expression per line in JSX
		'react/jsx-pascal-case': error, // Enforce PascalCase for user-defined JSX components
		'react/jsx-props-no-multi-spaces': error, // Disallow multiple spaces between inline JSX props
		'react/jsx-props-no-spreading': 'off', // Prevent JSX prop spreading
		'react/jsx-sort-default-props': error, // Enforce default props alphabetical sorting
		'react/jsx-sort-props': [error, {'reservedFirst': true}], // Enforce props alphabetical sorting
		'react/jsx-tag-spacing': [error, { // Validate whitespace in and around the JSX opening and closing brackets
			'closingSlash': 'never',
			'beforeSelfClosing': 'never',
			'afterOpening': 'never',
			'beforeClosing': 'never'
		}],
		'react/jsx-uses-react': error, // Prevent React to be marked as unused
		'react/jsx-uses-vars': error, // Prevent variables used in JSX to be marked as unused
		'react/jsx-wrap-multilines': [error, { // Prevent missing parentheses around multilines JSX
			'declaration': 'parens-new-line',
			'assignment': 'parens-new-line',
			'return': 'parens-new-line',
			'arrow': 'parens-new-line',
			'condition': 'parens-new-line',
			'logical': 'parens-new-line',
			'prop': 'parens-new-line'
		}]
	}
}