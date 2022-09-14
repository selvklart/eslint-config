const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
	// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks @ v4.6.0
	plugins: ['react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': error, // Checks rules of Hooks
    	'react-hooks/exhaustive-deps': error // Checks effect dependencies
	}
}