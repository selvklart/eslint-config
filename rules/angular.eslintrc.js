const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	/* https://github.com/angular-eslint/angular-eslint */
	rules: {
		// eslint-plugin
		'@angular-eslint/component-class-suffix': error, // Classes decorated with @Component must have suffix 'Component' (or custom) in their name
		'@angular-eslint/component-max-inline-declarations': [error, {template: 0, styles: 0, animations: 15}], // Enforces a maximum number of lines in inline template, styles and animations
		'@angular-eslint/component-selector': [error, {type: 'element', prefix: 'app', style: 'kebab-case'}], // Component selectors should follow given naming rules
		'@angular-eslint/contextual-decorator': error, // Ensures that classes use contextual decorators in its body
		'@angular-eslint/contextual-lifecycle': error, // Ensures that lifecycle methods are used in a correct context
		'@angular-eslint/directive-class-suffix': error, // Classes decorated with @Directive must have suffix 'Directive' (or custom) in their name
		'@angular-eslint/directive-selector': [error, {type: 'attribute', preffix: 'app', style: 'camelCase'}], // Directive selectors should follow given naming rules
		'@angular-eslint/no-attribute-decorator': error, // Disallow usage of @Attribute decorator
		'@angular-eslint/no-conflicting-lifecycle': error, // Ensures that directives not implement conflicting lifecycle interfaces
		'@angular-eslint/no-empty-lifecycle-method': error, // Disallows declaring empty lifecycle methods
		'@angular-eslint/no-forward-ref': error, // Disallows usage of forwardRef references for DI
		'@angular-eslint/no-host-metadata-property': error, // Disallows usage of the host metadata property
		'@angular-eslint/no-input-prefix': 'off', // Ensures that input bindings, including aliases, are not named or prefixed by the configured disallowed prefixes
		'@angular-eslint/no-input-rename': error, // Ensures that input bindings are not aliased
		'@angular-eslint/no-inputs-metadata-property': error, // Disallows usage of the inputs metadata property
		'@angular-eslint/no-lifecycle-call': error, // Disallows explicit calls to lifecycle methods
		'@angular-eslint/no-output-native': error, // Ensures that output bindings, including aliases, are not named as standard DOM events
		'@angular-eslint/no-output-on-prefix': error, // Ensures that output bindings, including aliases, are not named "on", nor prefixed with it
		'@angular-eslint/no-output-rename': error, // Ensures that output bindings are not aliased
		'@angular-eslint/no-outputs-metadata-property': error, // Disallows usage of the outputs metadata property
		'@angular-eslint/no-pipe-impure': error, // Disallows the declaration of impure pipes
		'@angular-eslint/no-queries-metadata-property': error, // Disallows usage of the queries metadata property
		'@angular-eslint/pipe-prefix': [error, {prefixes: ['app']}], // Enforce consistent prefix for pipes
		'@angular-eslint/prefer-on-push-component-change-detection': error, // Ensures component's changeDetection is set to ChangeDetectionStrategy.OnPush
		'@angular-eslint/prefer-output-readonly': error, // Prefer to declare @Output as readonly since they are not supposed to be reassigned
		'@angular-eslint/relative-url-prefix': error, // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix
		'@angular-eslint/require-localize-metadata': error, // Ensures that $localize tagged messages contain helpful metadata to aid with translations
		'@angular-eslint/sort-ngmodule-metadata-arrays': error, // Ensures ASC alphabetical order for NgModule metadata arrays for easy visual scanning
		'@angular-eslint/use-component-selector': error, // Component selector must be declared
		'@angular-eslint/use-component-view-encapsulation': error, // Disallows using ViewEncapsulation.None
		'@angular-eslint/use-injectable-provided-in': error, // Using the providedIn property makes Injectables tree-shakable
		'@angular-eslint/use-lifecycle-interface': error, // Ensures that classes implement lifecycle interfaces corresponding to the declared lifecycle methods
		'@angular-eslint/use-pipe-transform-interface': error, // Ensures that Pipes implement PipeTransform interface
	}
};