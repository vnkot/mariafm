module.exports = {
	plugins: [
		require('autoprefixer')({
			overrideBrowserslist: ['last 2 versions', 'not dead', '> 0.2%'],
		}),
	],
};
