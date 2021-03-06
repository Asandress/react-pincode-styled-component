const path = require("path");
module.exports = {
    entry: "./src/index.js",
        mode: "development",
    output: {
        filename: "./main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001,
        watchContentBase: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
}