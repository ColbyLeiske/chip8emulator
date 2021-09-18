module.exports = {
	presets: ['@babel/preset-env'],
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
};