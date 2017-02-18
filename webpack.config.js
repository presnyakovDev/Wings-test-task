module.exports = {
    entry: {
        app: "./src/Module",
    },
    output: {
        filename: "[name].bundle.js",
        path: "./js",
        publicPath: "./"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    stats: {
        errorDetails: true
    },
    progress: false,
    externals: {
        "angular": "angular"
    }
};
