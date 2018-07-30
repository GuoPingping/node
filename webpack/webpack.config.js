var path = require("path")
var webpack = require("webpack")
var config = {
    //打包的入口文件，一个字符串或一个对象
    entry: {
        app: './src/main.js',
    },
    //配置打包的结果，一个对象
    output: {
        path: path.resolve(__dirname, './public'), //定义打包后的输出文件路径，一个字符串
        filename: '[name].js', //定义输出文件名，一个字符串
        publicPath: '/public/', //指定资源文件引用的目录
    },
    //定义对模块的处理逻辑，一个对象
    module: {
        // loaders: [ //定义一系列的加载器，一个数组
        //     {
        //         test: /.*\.css$/, //正则表达式，用于匹配到的文件
        //         //loader: ["style", "css"], //字符串或数组，处理匹配到的文件，如果只需用到一个模块加载器则使用
        //         //loader:string,如果要使用多个模块加载器，则使用loaders：array
        //         include: '', //字符串或数组，指包含的文件夹
        //         exclude: './node_modules', //字符串或数组，指排除的文件夹
        //     }
        // ]
    },
    //影响对模块的解析，一个对象
    resolve: {
        // extensions: ['', '.css', '.js', 'jsx'], //自动补全识别后缀，是一个数组
    },
    //定义插件，一个数组
    plugins: [

    ],
    //配置webpack服务
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: '192.168.64.187', //自己的ip地址
        compress: true,
        port: 9000
    },
};
module.exports = config; //(export default config)