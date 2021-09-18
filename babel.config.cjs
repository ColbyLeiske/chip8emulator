module.exports = {
	presets: ['@babel/preset-env','es2021'],
	plugins: [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				root: ['./src/'],
				alias: {
					'test': './test',
					'src': './src'
				}
			}
		]
	],
	resolve: {
		extensions: ['.js']
	}
};