const merge = require('webpack-merge')
const path = require('path')
const parts = require('./webpack.parts')

const PATHS = {
    build: path.resolve(__dirname, 'public'),
    assets: path.resolve('assets'),
}

const coreConfig = merge(
    {
        entry: {
            app: ['./assets/react/index.js']
        },
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[ressource-path]',
            filename: 'build/js/[name].js',
            path: PATHS.build,
        },
        resolve: {
            alias: {
                assets: PATHS.assets,
            },
        },
    },
    parts.babelize({include: [`${PATHS.assets}/react`]}),
    parts.ignoreMomentLocales(),
    parts.liveReload(),
    parts.loadImages({
        include: [
            `${PATHS.assets}/images`,
            `${PATHS.build}/assets/images`,
        ],
    }),
    parts.loadFonts(),
    parts.extractSASS({ exclude: `${PATHS.assets}/react` }),
    parts.newExtractCSS({ include: `${PATHS.assets}/react`, modules: true }),
    parts.copyWebpack(),
    parts.optimizeWebpack()
)

const devConfig = () =>
    merge.smart(
        coreConfig,
        parts.generateSourceMaps('source-map'),
        parts.loadSASS({ exclude: `${PATHS.assets}/react`, srcMap: true }),
        parts.newLoadCSS({
            include: `${PATHS.assets}/react`,
            srcMap: true,
            modules: true,
        }),
        parts.timedOutput()
    )

const prodConfig = () =>
    merge.smart(
        parts.cleanBuild([`${PATHS.build}/build`]),
        coreConfig,
        parts.makeNonProductionCodeStrippable(),
        parts.concatenateModules(),
        parts.minifyJS(),
        parts.loadSASS({
            exclude: `${PATHS.assets}/react`,
            srcMap: false,
        }),
        parts.newLoadCSS({
            include: `${PATHS.assets}/react`,
            srcMap: false,
            modules: true,
        }),
        parts.minifyCSSAndOthers()
    )

module.exports = (env = process.env.NODE_ENV) =>
    env.NODE_ENV === 'production' ? prodConfig() : devConfig()