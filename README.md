### nodeJS excel 导入导出 
#### 插件: ejsExcel
#### 安装：npm install ejsexcel

#### 导出数据到excel表格
* 1.引用
* 2.首先，创建一个excel模板（template/test.xlsx)；
* 3.获取下载导出的模板路径；
* 4.判断路径是否存在；(主要针对Windows系统和苹果系统路径不一致所做出的的判断方法)
* 5.读取该路径的文件；
* 6.定义一个数组data用来存储导出的数据；
* 7.渲染data数据

#### 从excel表格导入数据
