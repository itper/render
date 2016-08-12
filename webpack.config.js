var webpack = require('webpack');
var commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlPlugin = require('html-webpack-plugin');
var AutoInsertManifest = require('./build/plugin/AutoInsertManifest');
module.exports = {
    entry:{
        app:['./src/browser.js'],
        lib:['react','react-dom']
    },
    output:{
        path:'./dist',
        filename:'[name].[chunkhash].js'
    },
    module:{
        // preLoaders:[
        //     {
        //         test:/\.js$/,
        //         loader:'eslint-loader',
        //         exclude:/node_modules/
        //     }
        // ],
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel',
                include:__dirname+'/src',
                query:{
                    presets:[
                        'es2015',
                        'react'
                    ],
                    cacheDirectory:true
                }
            }
        ]
    },
    plugins:[
         new commonsChunkPlugin({names:['lib']}),
         
    ]
}