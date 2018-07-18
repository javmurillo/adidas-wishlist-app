const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-2"]
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: SRC_DIR + '/index.html',
                to: DIST_DIR + '/index.html',
                toType: 'file'
            },
            {
                from: SRC_DIR + '/assets',
                to: DIST_DIR + '/assets',
                toType: 'dir'
            },
            {
                from: SRC_DIR + '/api-docs',
                to: DIST_DIR + '/api-docs',
                toType: 'dir'
            },
        ])
    ]
};

module.exports = config;