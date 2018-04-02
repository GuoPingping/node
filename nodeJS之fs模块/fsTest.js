var fs = require("fs") //公共引用

console.log("==============读取文件===========================")
    //异步读取（性能更改，速度更快，没有阻塞）
fs.readFile('test.txt', function(err, data) {
        if (err) {
            return console.log(err)
        } else {
            console.log("异步读取" + data)
        }
    })
    //同步读取
var data = fs.readFileSync('test.txt');
console.log("同步读取：" + data)
console.log("==================读取文件结束=======================")

console.log("==================打开文件=======================")
    // fs.open(path,flags[,model],callback)
fs.open('test.txt', 'r+', function(err, fd) {
    if (err) {
        console.log(err)
    }
    console.log("文件打开成功！")
})
console.log("==================打开文件结束=======================")

console.log("==================读取文件信息=======================")
fs.stat('test.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");

    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});
console.log("==================读取文件信息结束=======================")

console.log("==================写入文件=======================")
fs.writeFile('test.txt', '通过fs.writeFile写入而来的内容', function(err) {
    if (err) {
        return console.log(err)
    }
    console.log("写入文件成功！")
})
fs.appendFile('test.txt', '通过追加的方式写入文件内容', function(err) {
    if (err) {
        return console.log(err)
    }
    console.log("追加写入文件成功！")
})
console.log("==================写入文件结束=======================")