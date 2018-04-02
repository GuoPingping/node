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

console.log("==================关闭文件=======================")
var buf = new Buffer(1024);

fs.open('test.txt', 'r+', function(err, fd) {
    if (err) {
        return console.log(err)
    }
    //fs.read(fd, buffer, offset, length, position, callback); 
    /** * fd, 使用fs.open打开成功后返回的文件描述符 
     * * buffer, 一个Buffer对象，v8引擎分配的一段内存 
     * * offset, 整数，向缓存区中写入时的初始位置，以字节为单位 
     * * length, 整数，读取文件的长度 
     * * position, 整数，读取文件初始位置；文件大小以字节为单位 
     * * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，
     * 被读取的缓存区对象 */

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.log(err)
        }
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString())
        }

        fs.close(fd, function(err) {
            if (err) {
                console.log(err)
            }
            console.log("文件已关闭！")
        })
    })
})

fs.open('/test.txt', 'a', function(err, fd) {
    if (err) { console.error(err); return; } else {
        var buffer = new Buffer('写入文件数据内容');
        //写入'入文件'三个字 
        fs.write(fd, buffer, 3, 9, 12, function(err, written, buffer) {
            if (err) {
                console.log('写入文件失败');
                console.error(err);
                return;
            } else {
                console.log(buffer.toString());
                //写入'数据内'三个字 
                fs.write(fd, buffer, 12, 9, null, function(err, written, buffer) {
                    console.log(buffer.toString());
                })
            }
        });
    }
});

console.log("==================关闭文件结束=======================")

console.log("==================文件截取=======================")
fs.open('test.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("截取了10字节后的文件内容。");

    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("文件截取成功。");
    })
})
console.log("==================文件截取结束=======================")

console.log("==================文件删除=======================")
    // fs.unlink('test.txt', function(err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("文件删除成功！");
    // });
console.log("==================文件删除结束=======================")

console.log("==================创建目录=======================")
    // fs.mkdir('test', function(err) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log("创建目录成功！")
    // })
console.log("==================创建目录结束=======================")

console.log("==================读取目录=======================")
    // fs.readdir('test', function(err, files) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log("读取目录成功！")
    // })
console.log("==================读取目录结束=======================")

console.log("==================删除目录=======================")
    // fs.rmdir('test', function(err) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log("删除目录成功！")
    // })
console.log("==================删除目录结束=======================")

console.log("==================判断文件是否存在=======================")
    //fs.exists(path, callback); 
    /** * path, 要查看目录/文件的完整路径及名； 
     * * [callback(exists)], 操作完成回调函数；exists true存在，false表示不存在 */
fs.exists('/text', function(exists) {
    var retTxt = exists ? retTxt = '文件存在' : '文件不存在';
    console.log(retTxt);
});
console.log("==================判断文件是否存在结束=======================")

console.log("==================创建读取流=======================")
    //start指定文件开始读取位置；end指定文件开始读结束位置
var rs = fs.createReadStream('test.txt', { start: 0, end: 2 });
console.log("==================创建读取流结束=======================")

console.log("==================创建写入流=======================")
var ws = fs.createWriteStream('test.txt');
console.log("==================创建写入流结束=======================")

console.log("==================管道pipe实现流读写=======================")

var rs = fs.createReadStream('test.txt');
var ws = fs.createWriteStream('test.txt');
rs.pipe(ws);
rs.on('data', function(data) {
    console.log('数据可读')
});
rs.on('end', function() {
    console.log('文件读取完成'); //ws.end('再见') 
});
console.log("==================管道pipe实现流读写=======================")