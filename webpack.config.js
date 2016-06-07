var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractStyle = new ExtractTextPlugin('style/[name].css');
var extractLess = new ExtractTextPlugin('style/[name].css');
var devtool = process.env.NODE_ENV !== "production" ? 'source-map' : undefined; 
module.exports = {
    entry: {
        main : './web-app/main.js',
    },
    output: {
        path: './dist/public',
        filename: 'script/[name].js',
    },
    devtool: devtool,
    resolve: {
        extensions: ['', '.js', '.vue'],
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },  {
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 8148,
                name: 'asset/[name].[ext]?[hash]'
            }
        },{
            test: /\.less$/,
            loader: extractLess.extract("style","css!less?root=../.."),
        },{
            test: /\.css$/,
            loader: extractLess.extract("style","css?root=../.."),
        }]
    },
    plugins: [
        extractStyle,
        extractLess,
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        loaders: {
            js: 'babel',
            css : 'style!css!less',

        },
        html : {
            root: '../..',
        }
    }
}