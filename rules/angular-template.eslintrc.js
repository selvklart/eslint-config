const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	/* https://github.com/angular-eslint/angular-eslint */
	rules: {
		// eslint-plugin-template
		'@angular-eslint/template/accessibility-alt-text': error, // Enforces alternate text for elements which require the alt, aria-label, aria-labelledby attributes
		'@angular-eslint/template/accessibility-elements-content': error, // Ensures that the heading, anchor and button elements have content in it
		// '@angular-eslint/template/accessibility-label-for': error, DEPRECATED
		'@angular-eslint/template/accessibility-label-has-associated-control': error, // Ensures that a label element/component is associated with a form element
		'@angular-eslint/template/accessibility-table-scope': error, // Ensures that the scope attribute is only used on the <th> element
		'@angular-eslint/template/accessibility-valid-aria': error, // Ensures that correct ARIA attributes and respective values are used
		'@angular-eslint/template/banana-in-box': error, // Ensures that the two-way data binding syntax is correct
		'@angular-eslint/template/button-has-type': error, // Ensures that a button has a valid type specified
		'@angular-eslint/template/click-events-have-key-events': error, // Ensures that the click event is accompanied with at least one key event keyup, keydown or keypress.
		'@angular-eslint/template/conditional-complexity': error, // The conditional complexity should not exceed a rational limit
		'@angular-eslint/template/cyclomatic-complexity': error, // Checks cyclomatic complexity against a specified limit
		'@angular-eslint/template/eqeqeq': error, // Requires === and !== in place of == and !=
		'@angular-eslint/template/i18n': error, // Ensures following best practices for i18n
		'@angular-eslint/template/mouse-events-have-key-events': error, // Ensures that the mouse events mouseout and mouseover are accompanied by focus and blur events respectively
		'@angular-eslint/template/no-any': error, // The use of "$any" nullifies the compile-time benefits of Angular's type system
		'@angular-eslint/template/no-autofocus': error, // Ensures that the autofocus attribute is not used
		'@angular-eslint/template/no-call-expression': error, // Disallows calling expressions in templates, except for output handlers
		'@angular-eslint/template/no-distracting-elements': error, // Enforces that no distracting elements are used
		'@angular-eslint/template/no-duplicate-attributes': error, // Ensures that there are no duplicate input properties or output event listeners
		'@angular-eslint/template/no-negated-async': error, // Ensures that async pipe results are not negated
		'@angular-eslint/template/no-positive-tabindex': error, // Ensures that the tabindex attribute is not positive
		'@angular-eslint/template/use-track-by-function': error // Ensures trackBy function is used
	}
};