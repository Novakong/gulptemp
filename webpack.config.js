var webpack = require('webpack');
var path = require('path');

function getEntry() {
	var jsPath = path.resolve(__dirname, 'js');
	var dirs = fs.readdirSync(jsPath);
	var matchs = [], files = {};
	dirs.forEach(function (item) {
		matchs = item.match(/(.+)\.js$/);
		if (matchs) {
			files[matchs[1]] = path.resolve(__dirname, 'js', item);
		}
	});
	return files;
}

module.exports = {
	devtool: "source-map",
	entry: getEntry(),
	output: {
		path: path.join(__dirname + 'dist/js/'),
		filename: "[name].js",
		publicPath: 'dist/js/'
	},
	module: {
		loaders: [
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
			jquery: __dirname+"/js/dep/jquery.min.js"
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new uglifyJsPlugin({
			compress: {
				warnings: false;
			}
		})
	]
}