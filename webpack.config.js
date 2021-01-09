const path = require('path');
const PATHS = {
    build: path.resolve(__dirname, 'public'),
}

module.exports = {
    entry: {
        app: ['./assets/react/index.js']
    },
    output: {
        filename: 'build/js/[name].js',
        path: PATHS.build,
    },
    devServer: { // configuration du server permettant le live-reload
        inline: true,
        port: 8080
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",'@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    }
}