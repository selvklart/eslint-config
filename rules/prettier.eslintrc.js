const error = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

export default {
	// https://github.com/prettier/eslint-plugin-prettier @ v4.2.1
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': error
	}
}