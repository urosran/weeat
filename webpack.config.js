module.exports = {
	devtool: 'source-map', // Enables source maps for both JS(X) and (S)CSS
	entry: './src/components/App.jsx',
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
        ]
    },
	resolve: {
		extensions: ['*', '.js', 'jsx', '.scss']
	},
	plugins: [

	]
};