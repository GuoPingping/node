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