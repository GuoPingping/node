const path = require("path")
const webpack = require("webpack")
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config/basic.config.js')
const glob = require('glob')
const pruifyCssPlugin = require('purifycss-webpack')

var webpackConfig = {
    //打包的入口文件，一个字符串或一个对象
    entry: {
        app: './src/main.js',
    },
    //配置打包的结果，一个对象
    output: {
        path: path.resolve(__dirname, './public'), //定义打包后的输出文件路径，一个字符串
        filename: '[name].js', //定义输出文件名，一个字符串
        publicPath: config.publicPath, //指定资源文件引用的目录
    },
    //定义对模块的处理逻辑，一个对象
    module: {
        rules: [{
                test: /\.css$/, //正则表达式，用于匹配到的文件
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                })
            }, {
                test: /\.(png|jsp|gif)/,
                use: [{
                    loader: 'url-loader', //字符串或数组，处理匹配到的文件，如果只需用到一个模块加载器则使用 //loader:string,如果要使用多个模块加载器，则使用loaders：array
                    options: {
                        limit: 500000,
                        outputPath: 'images/'
                    }
                }]
            }, {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            }, {
                test: /\.less$/,
                use: [{ //extractTextPlugin.extract less分离
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }, {
                test: /\.scss/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/ //字符串或数组，指排除的文件夹
            }]
            // loaders: [ //定义一系列的加载器，一个数组
            //     {
            //         include: '', //字符串或数组，指包含的文件夹
            //     }
            // ]
    },
    //影响对模块的解析，一个对象
    resolve: {
        // extensions: ['', '.css', '.js', 'jsx'], //自动补全识别后缀，是一个数组
    },
    //定义插件，一个数组
    plugins: [
        new uglify(), //打包js
        new htmlPlugin({ //打包html
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        // new extractTextPlugin('./src/assets/css/index.css')
        new pruifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')) //src下所有html文件
        }), //消除未使用的css
    ],
    //配置webpack服务
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: '192.168.64.187', //自己的ip地址
        compress: true,
        port: 9000
    },
};

if (process.env.type === "build") {
    var website = {
        publicPath: '',
    }
} else {
    var website = {
        publicPath: ''
    }
}

module.exports = webpackConfig; //(export default webpackConfig)