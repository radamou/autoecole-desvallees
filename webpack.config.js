const { merge } = require('webpack-merge');
const path = require('path');
const webpackParts = require('./webpack.parts')

const PATHS = {
    build: path.resolve(__dirname, 'public'),
    assets: path.resolve('assets')
}

const baseConfiguration = merge(
    {
        mode: 'development',
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
        resolve: {
            alias: {
                assets: PATHS.assets,
            },
        },
    },
    webpackParts.babelize(),
    webpackParts.loadImage(
        {
            include: [
                `${PATHS.assets}/images`
            ],
        }
    ),
    webpackParts.loadSVG(
        {
            include: [
                `${PATHS.assets}/images`
            ],
        }
    )
)

const devConfig = () => baseConfiguration
const prodConfig = () => baseConfiguration

module.exports = (env = process.env.NODE_ENV) =>
    env.NODE_ENV === 'production' ? prodConfig() : devConfig()