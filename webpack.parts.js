const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Path = require('path')
const fs = require('fs')

// JS (Babel)
// ----------

exports.babelize = ({ include, exclude = /node_modules/ } = {}) => {
    const options = JSON.parse(
        fs.readFileSync(Path.resolve(__dirname, './package.json'))
    ).babel
    options.presets.forEach(function(preset) {
        if (preset instanceof Array && preset[0] === 'env') {
            preset[1].modules = false
        }
    })

    return {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include,
                    exclude,
                    use: [{ loader: 'babel-loader', options }],
                },
            ],
        },
    }
}

// CSS & SASS
// ----------

exports.loadSASS = ({ include, exclude, srcMap }) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: srcMap,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: loader => [require('postcss-cssnext')()],
                                sourceMap: srcMap,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: srcMap },
                        },
                    ],
                    fallback: {
                        loader: 'style-loader',
                        options: { sourceMap: srcMap },
                    },
                }),
            },
        ],
    },
})

exports.extractSASS = () => {
    return {
        plugins: [new ExtractTextPlugin({ filename: 'build/css/[name].css' })],
    }
}

exports.newExtractCSS = ({ include, exclude, modules }) =>
    extractStyling({ ext: 'css', include, exclude, modules })

exports.newLoadCSS = ({ include, exclude, modules }) =>
    loadStyling({ ext: 'css', include, exclude, modules })

// Images & Fonts
// ----------

exports.loadImages = ({ include, exclude = '/node_modules/' } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(?:jpe?g|png|gif)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'build/[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
})

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
                            name: '[path][name].[ext]',
                            fallback: 'file-loader',
                        },
                    },
                ],
            },
        ],
    },
})

exports.loadFonts = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(?:woff2?|eot|ttf|otf)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'build/[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
})


// Copy images
// ----------

exports.copyWebpack = () => {
    const CopyWebpackPlugin = require('copy-webpack-plugin')
    return {
        plugins: [
            new CopyWebpackPlugin(
                [
                    {
                        from: 'assets/images/core',
                        to: 'build/assets/images',
                    },
                    { from: 'assets/fonts', to: 'build/assets/fonts' },
                ],
                {}
            ),
        ],
    }
}

// Optimizations
// -------------

exports.concatenateModules = () => ({
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
})

exports.ignoreDynamicRequiresFor = (requestRegExp, contextRegExp) => ({
    plugins: [new webpack.IgnorePlugin(requestRegExp, contextRegExp)],
})

exports.ignoreMomentLocales = () =>
    exports.ignoreDynamicRequiresFor(/^\.\/locale$/, /moment$/)

exports.makeNonProductionCodeStrippable = () => ({
    plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })],
})

exports.minifyCSSAndOthers = (minimize = true) => ({
    plugins: [new webpack.LoaderOptionsPlugin({ minimize })],
})

exports.minifyJS = (options = {}) => {
    const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
    options = { parallel: true, sourceMap: false, ...options }
    return { plugins: [new UglifyJSPlugin(options)] }
}

// Dev UX
// ----------

exports.cleanBuild = (paths, options) => {
    const CleanWebpackPlugin = require('clean-webpack-plugin')
    return { plugins: [new CleanWebpackPlugin(paths, options)] }
}

exports.generateSourceMaps = (type = 'eval-source-map') => ({
    devtool: type,
})

// LiveReload
// ----------

exports.liveReload = () => {
    const LiveReloadPlugin = require('webpack-livereload-plugin')
    return {
        plugins: [new LiveReloadPlugin()],
    }
}

// Manifest
// ----------

exports.optimizeWebpack = () => ({
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
    ],
})

exports.timedOutput = () => {
    return {
        plugins: [
            function() {
                this.plugin('watch-run', function(watching, callback) {
                    const date = new Date()
                    console.log(
                        'Date: ' +
                        date.toLocaleDateString() +
                        ' ' +
                        date.toLocaleTimeString()
                    )
                    callback()
                })
            },
        ],
    }
}

// Helper functions
// ----------------

function buildCSSRule({
                          ext,
                          altLang = null,
                          include,
                          exclude,
                          modules = false,
                          useStyle = false,
                          srcMap,
                      }) {
    const cssOptions = {
        importLoaders: 1,
        sourceMap: srcMap,
    }
    if (modules === true) {
        modules = {
            camelCase: 'only',
            localIdentName: '_[name]-[local]-[hash:base64:4]',
            modules: true,
        }
    }
    if (modules) {
        Object.assign(cssOptions, modules)
    }

    const result = {
        test: new RegExp(`\\.${ext}$`),
        include,
        exclude,
        use: [
            { loader: 'css-loader', options: cssOptions },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: loader => [require('postcss-cssnext')()],
                    sourceMap: srcMap,
                },
            },
        ],
    }

    if (altLang) {
        result.use.push({
            loader: `${altLang}-loader`,
            options: { sourceMap: srcMap },
        })
    }

    if (useStyle) {
        result.use.unshift('style-loader')
    }

    return result
}

const cssPlugins = new Map()

function extractStyling({
                            ext,
                            include,
                            exclude,
                            modules,
                            name,
                            altLang,
                            srcMap,
                        }) {
    const cssPluginExisted = cssPlugins.has(name)
    if (!cssPluginExisted) {
        cssPlugins.set(
            name,
            new ExtractTextPlugin({ filename: 'build/css/[name].css' })
        )
    }
    const cssPlugin = cssPlugins.get(name)

    const { test, use } = buildCSSRule({ ext, modules, altLang, srcMap })

    return {
        plugins: cssPluginExisted ? [] : [cssPlugin],
        module: {
            rules: [
                {
                    test,
                    include,
                    exclude,
                    use: cssPlugin.extract({
                        fallback: 'style-loader',
                        use,
                    }),
                },
            ],
        },
    }
}

function loadStyling({ ext, include, exclude, modules, altLang, srcMap }) {
    return {
        module: {
            rules: [
                buildCSSRule({
                    ext,
                    altLang,
                    include,
                    exclude,
                    modules,
                    useStyle: true,
                    srcMap,
                }),
            ],
        },
    }
}