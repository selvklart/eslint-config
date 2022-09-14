const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
	/* https://github.com/cartant/eslint-plugin-rxjs @ 5.0.2 */
	plugins: ['rxjs'],
	rules: {
		'rxjs/ban-observables': 'off', // Forbids the use of banned observables
		'rxjs/ban-operators': 'off', // Forbids the use of banned operators
		'rxjs/finnish': error, // Enforces the use of Finnish notation
		'rxjs/just': 'off', // Enforces the use of a just alias for of
		'rxjs/no-async-subscribe': 'off', // Forbids passing async functions to subscribe
		'rxjs/no-compat': error, // Forbids importation from locations that depend upon rxjs-compat
		'rxjs/no-connectable': error, // Forbids operators that return connectable observables
		'rxjs/no-create': error, // Forbids the calling of Observable.create
		'rxjs/no-cyclic-action': error, // Forbids effects and epics that re-emit filtered actions
		'rxjs/no-explicit-generics': error, // Forbids explicit generic type arguments
		'rxjs/no-exposed-subjects': 'off', // Forbids exposed (i.e. non-private) subjects
		'rxjs/no-finnish': 'off', // Forbids the use of Finnish notation
		'rxjs/no-ignored-error': 'off', // Forbids the calling of subscribe without specifying an error handler
		'rxjs/no-ignored-notifier': error, // Forbids observables not composed from the repeatWhen or retryWhen notifier
		'rxjs/no-ignored-observable': 'off', // Forbids the ignoring of observables returned by functions
		'rxjs/no-ignored-replay-buffer': error, // Forbids using ReplaySubject, publishReplay or shareReplay without specifying the buffer size
		'rxjs/no-ignored-subscribe': 'off', // Forbids the calling of subscribe without specifying arguments
		'rxjs/no-ignored-subscription': 'off', // Forbids ignoring the subscription returned by subscribe
		'rxjs/no-ignored-takewhile-value': error, // Forbids ignoring the value within takeWhile
		'rxjs/no-implicit-any-catch': error, // Like the no-implicit-any-catch rule in @typescript-eslint/eslint-plugin, but for the catchError operator instead of catch clauses
		'rxjs/no-index': error, // Forbids the importation from index modules - for the reason, see this issue
		'rxjs/no-internal': error, // Forbids the importation of internals
		'rxjs/no-nested-subscribe': 'off', // Forbids the calling of subscribe within a subscribe callback
		'rxjs/no-redundant-notify': error, // Forbids redundant notifications from completed or errored observables
		'rxjs/no-sharereplay': error, // Forbids using the shareReplay operator
		'rxjs/no-subclass': error, // Forbids subclassing RxJS classes
		'rxjs/no-subject-unsubscribe': error, // Forbids calling the unsubscribe method of a subject instance
		'rxjs/no-subject-value': error, // Forbids accessing the value property of a BehaviorSubject instance
		'rxjs/no-subscribe-handlers': 'off', // Forbids the passing of handlers to subscribe
		'rxjs/no-topromise': error, // Forbids the use of the toPromise method
		'rxjs/no-unbound-methods': error, // Forbids the passing of unbound methods
		'rxjs/no-unsafe-catch': error, // Forbids unsafe catchError usage in effects and epics
		'rxjs/no-unsafe-first': error, // Forbids unsafe first/take usage in effects and epics
		'rxjs/no-unsafe-subject-next': error, // Forbids unsafe optional next calls
		'rxjs/no-unsafe-switchmap': error, // Forbids unsafe switchMap usage in effects and epics
		'rxjs/no-unsafe-takeuntil': error, // Forbids the application of operators after takeUntil
		'rxjs/prefer-observer': 'off', // Forbids the passing separate handlers to subscribe and tap
		'rxjs/suffix-subjects': 'off', // Enforces the use of a suffix in subject identifiers
		'rxjs/throw-error': error // Enforces the passing of Error values to error notifications
	}
}