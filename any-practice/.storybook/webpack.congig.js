const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: '11'
                                    }
                                }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import'],
                        cacheDirectory: true
                    }
                },
                {
                    loader: 'ts-loader',
                    options: {
                        experimentalWatchApi: true,
                        transpileOnly: true
                    }
                }
            ]
        },
        {
            test: /.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|xlsx)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets',
                        publicPath: function(path) {
                            return '/assets/' + path;
                        }
                    }
                }
            ]
        }
    );
    config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
            memoryLimit: 2048,
            useTypescriptIncrementalApi: true,
            compilerOptions: {
                baseUrl: path.resolve(__dirname, '../') + '/src',
                paths: {
                    'app/*': [path.resolve(__dirname, '../') + '/src/app/*']
                },
                skipLibCheck: true,
                exclude: [
                    path.resolve(__dirname, '../') + '/dist',
                    path.resolve(__dirname, '../') + '/build',
                    path.resolve(__dirname, '../') + '/node_modules'
                ]
            }
        })
    );

    config.resolve.extensions.push('.ts', '.tsx', 'js');
    config.resolve.modules.push(path.resolve(__dirname, '../') + '/node_modules');
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
};
