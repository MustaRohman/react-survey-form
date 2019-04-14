const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TITLE = 'title';

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "",
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: TITLE,
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'root'
        })
    ]
};