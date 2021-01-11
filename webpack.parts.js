exports.babelize = () => {
   return {
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
               }
           ]
       }
   }
}

exports.loadImage = ({ include, exclude = '/node_modules/' } = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(?:jpe?g|png|gif)$/,
                    include,
                    exclude,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                limit: 10000,
                                name: 'build/[path][name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
    }
}

exports.loadSVG = ({ include, exclude }) => ({
    module: {
        rules: [
            {
                test: /\.svg$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                            name: 'build/[path][name].[ext]',
                            fallback: 'file-loader',
                        },
                    },
                ],
            },
        ],
    },
})