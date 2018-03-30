# nodeJS单元测试

### 1、什么是单元测试？
单元测试是由一组独立的测试构成，每个测试对软件中的一个单独的程序的最小单元。<br>每个测试针对软件中的一个单独的程序的最小单元。单元测试并非检查程序单元之间是否能够合作良好，<br>而是检查单个程序单元行为是否正确。一个单元可能是单个程序、类、对象、方法等。
### 2、为何需要单元测试？
* 验证代码的正确性
* 避免修改代码时出错
* 避免其他团队成员修改代码时出错
* 便于自动化测试与部署
### 3、单元测试的要求
* 语句覆盖达到99%
* 分支覆盖达到100%
* 覆盖错误处理的路径
* 单元的软件特性覆盖
* 对试用额定数据值、奇特数据值和边界值的计算进行校验，用假想的数据类型和数据值运行，测试排斥不规则输入的能力
### 4、如何进行单元测试
* 选择测试工具
    * 测试管理工具
    测试管理工具是用来组织和运行整个测试的工具，它能够将测试框架、断言库、测试浏览器、测试代码和<br>被测试代码组织起来，并运行被测试代码进行测试。
    测试工具有：Mocha、Karma
    * 测试框架(Mocha)
    测试框架是单元测试的核心，它提供了单元测试所需的各种API，你可以用它来对你的工具进行单元测试。
    * 断言库(chai.js)
    断言库提供了用于描述你的具体测试的API
    * 浏览器(IE/Chrome/PhantomJs)
    * 测试覆盖率统计工具(Karma-Coverage)
    Karma-Coverage是Karma官方提供的覆盖率统计插件。
### 5、环境搭建
* 配置npm
    * 初始化项目的package.json，并将所需要的工具安装在项目中
        * 安装插件：<br>
            npm install -g karma-cli //安装karma-cli<br>
            npm install -g mocha --save-dev //单元测试框架<br>
            npm install -g chai --save-dev //测试用例断言库<br>
            npm install -g karma --save //karma安装<br>
* 初始化Karma配置文件
    * 在项目根目录运行：karma init //初始化karma配置文件
    * 选择使用的测试框架
    * 提示是否使用require.js，可以不用
    * 填写测试脚本存放位置，支持使用通配符，放在test/unit目录下，并以.spec.js结尾
    * 提示没有匹配的文件，因为还没开始写测试用例，所以先忽略
    * 是否需要排除的符合前面格式的文件？直接跳过
    * 是否让karma监控所有文件，并在文件修改时自动执行测试。因为是搭建环境，所以选择no
    * 之后按回车，我们能看到项目根目录生成了karma的配置文件karma.conf.js
* 手动修改karma.config.js配置
    * frameworks:['mocha','chai']
### 6、编写测试
* 测试文件命名规范
    测试目录需要在根目录下面，通常使用test进行命名，表明test目录中存放的为测试文件。<br>通常，测试脚本与所要测试的源码脚本同名，但是后缀名为.test.js(表示测试文件)或者spec.js(表示规格)<br>
* 执行测试命令
    mocha test/demo.test.js
* 通配符
    命令行指定测试脚本时，可以使用通配符，同时指定多个文件
    > mocha spec/{my,awesome}.js<br>
    > mocha test/unit/*.js<br>
    除了使用shell通配符，还可以使用Node通配符<br>
    > mocha 'test/**/*.@(js|jsx)'
* 命令行参数
    查看所有mocha命令参数<br>
    > mocha -help<br>
    指定测试报告格式，默认是spec格式<br>
    > mocha --reporter spec<br>
    > mocha --reporter tap<br>
    查看所有报告格式<br>
    > mocha --reporters<br>
    默认2000毫秒报超时错误，可以使用t指定超时时间<br>
    > mocha -t 5000 test/demo.test.js<br> 
* 使用mochawesome，可以生成漂亮的HTML格式的报告
    mochawesome模块是安装在项目内并在项目中生成的文件，安装命令<br>
    > cnpm install --save-dev mochawesome<br>
* 浏览器测试
    除了在命令行运行，mocha还可以在浏览器中运行，初始化html文件：<br>
    > mocha init test/demo <br>
* 生成规格文件
    Mocha支持从测试用例生成规格文件<br>
    > mocha --recursive -R markdown > spec.md<br>
    如果想生成HTML格式的报告spec.html，使用下面的命令：<br>
    > mocha --recursive -R doc > spec.html<br>

------------------------------------------------------------------------

## Karma
> cnpm instal mocha karma-mocha karma-webpack karma-webpack karma-chrome-launcher karma-firefox-launcher --save-dev
> cnpm install karma --save

-------------------------------------------------------------------------------

## [代码覆盖率](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)

### 它有四个测量纬度
* 行覆盖率（line coverage）：是否每一行都执行了？
* 函数覆盖率（function coverage）：是否每个函数都调用了？
* 分支覆盖率（branch coverage）：是否每个if代码块都执行了？
* 语句覆盖率（statement coverage）：是否每个语句都执行了？

1. 安装
> cnpm install -g istanbul

2. 运行
> istanbul cover _mocha<br>
指定文件进行测试<br>
> istanbul cover _mocha -- tests/test.sqrt.js -R spec