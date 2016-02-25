var webpack = require('webpack');
var path = require('path');
var fs= require('fs') ;


function getEntry() {
	var jsPath = path.resolve(__dirname, 'src/js');
	var dirs = fs.readdirSync(jsPath);
	var matchs = [], files = {};
	dirs.forEach(function (item) {
		matchs = item.match(/(.+)\.entry\.js$/);
		console.log(matchs);
		if (matchs) {
			files[matchs[1]] = path.resolve(__dirname, 'src/js', item);
		}
	});
	return files;
}
module.exports = {
	// devtool: "source-map",
	entry: getEntry(),
	output: {
		path: __dirname + '/dist/js/',
		filename: "[name].js",
		publicPath: 'dist/js/'
	},
	module: {
		loaders: [
			// { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
			// { test: /\.css$/, loader:"style!css"},
			// { test: /\.html$/, loader:'html'},
			// { test: /\.json$/, loader:'json'},
			// { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss", )},
			// { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss", "sass-loader")},
			// { test: /\.html$/, loader:'html'},
			// { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url'}
		]
	},
	resolve: {
		alias: {
			jquery: __dirname+"/lib/jquery-2.1.1.min.js",
			kpreload: __dirname+"/lib/kpreload.js",
		},
		root: [
			path.resolve('./lib')
		]
	},
	plugins: [
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery'
		// }),
		// new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}