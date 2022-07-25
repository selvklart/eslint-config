const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	/* https://github.com/cartant/eslint-plugin-rxjs-angular @ 2.0.0 */
	plugins: ['rxjs-angular'],
	rules: {
		'rxjs-angular/prefer-async-pipe': 'off', // Forbids the calling of subscribe within Angular components
		'rxjs-angular/prefer-composition': 'off', // Forbids subscribe calls that are not composed within Angular components (and, optionally, within services, directives, and pipes)
		'rxjs-angular/prefer-takeuntil': error // Forbids Calling subscribe without an accompanying takeUntil
	}
}