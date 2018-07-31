webpack
===============================================================================
```
1. npm init:在项目中生成package.json配置文件，也可手动建立
2. 安装webpack
    npm install webpack -g
    将webpack写入package.json的devDependenices中：npm install webpack --save-dev
3. 打包模块：
    webpack <entry><output>
    <entry>:指定打包文件
    <output>:指定打包后的文件
4. webpack配置文件常用配置项
    webpack.config.js:手动创建于项目根目录
5. webpack-dev-server
    一个轻量级的服务器，修改文件源码后，自动刷新页面将修改同步到页面上。
6. 安装webpack-dev-server
    npm install webpack-dev-server -g
    package.json中添加：npm install webpack-dev-server --save-dev
7. webpack-dev-server --hot --inline 完成自动刷新
8. 默认端口号是8080，如果占用，修改端口号，webpack-dev-server --port 端口号
9. 输入webpack-dev-server开启服务，在浏览器地址栏输入：localhost:端口号,
    浏览器打开根目录index.html,无此文件，则列出所有的文件夹
10. 自动刷新需要用到:
    webpack-dev-server --hot --inline
    在每次修改文件，将文件打包，保存在内存里，在package.json文件的scripts配置中添加配置，
    避免每次都输入一长串命令。
    scripts:{
        "build":webpack-dev-server --hot --inline
    }
    webpack-dev-server --hot --inline
    ==npm run build

```

```
webpack.config.js配置文件：

1. 入口文件entry
2. 打包结果文件output
3. css文件打包：
    安装cnpm install style-loader --save-dev和cnpm install -css-loader 
    配置module的rules
5. JS压缩，打包：
    webpack.config.js中引入
        const uglify=require('uglifyjs-webpack-plugin')
6. HTML文件发布：
    webpack.config.js中引入
        const htmlPlugin=require('html-webpack-plugin')
    安装 cnpm install html-webpack-plugin --save-dev
    plugins进行插件配置
7. css中对图片进行处理：
    安装cnpm install file-loader url-loader --save-dev
    配置module的rules
8. css分离与图片路径处理：
    安装cnpm install --save-dev extract-text-webpack-plugin
    引用该插件
    配置css
9. 处理HTML中的图片：
    安装cnpm install html-withimg-loader --save-dev
    配置
10. CSS进阶，Less文件的打包与分离：
    安装cnpm install less --save-dev
    cnpm install less-loader --save-dev
    module中配置
    less分离：extract-text-webpack-plugin
11. SASS文件的打包和分离：
    cnpm install node-sass --save-dev
    cnpm install sass-loader --save-dev
12. 自动处理css3前缀：
    为了浏览器兼容，加入一些css3的前缀
    cnpm install postcss-loader autoprefixer --save-dev
    新建postcss.config.js，引入autoprefixer插件，postCss拥有添加前缀的能力
    配置
13. 消除未使用的css：
    cnpm install purifycss-webpack purify-css --save-dev
14. webpack添加babel支持:
    babel:几个模块化的包，核心功能位于babel-core的npm包中
    cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    配置
15. 打包调试：
16. 开发和生产并行设置：
    devDependencies:开发依赖
    dependencies:生产依赖（线上）
    安装生产环境的依赖包：cnpm install --production
    package.json:增加dev设置，区分生产环节 还是开发环境
    webpack.config.js配置
```