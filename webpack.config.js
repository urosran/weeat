const webpack = require('webpack');

module.exports = {
	devtool: 'source-map', // Enables source maps for both JS(X) and (S)CSS
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
        ]
    },
	resolve: {
		extensions: ['*', '.js', 'jsx', '.scss']
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify('production')
		// })
	]
};