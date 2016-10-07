var path = require('path');
var PORT = 4000;
module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
		},{
			test: /\.scss?$/,
			loader: 'style-loader!css-loader!sass-loader'
		}]
	},
	devtool: '#source-map',
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	},
	devServer: {
		port: PORT,
		inline: true,
		contentBase: './',
		historyApiFallback: true,
	}
}
