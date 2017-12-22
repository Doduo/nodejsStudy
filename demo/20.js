// 打印当前目录所有文件

const fs = require('fs');
const path = require('path');

require('./lib/dateFormat.js');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');

fs.readdir(target, (err, files) => {
    // 箭头函数 
    // 如果没有参数和多个参数必须加括号
    // 如果只有一个参数可以不加括号
    files.forEach(file => {
        console.time(file);
        // console.log(path.join(target,file));
        fs.stat(path.join(target, file), (err, stats) => {
            // \t 制表符
            console.log(`${stats.mtime.format("YYYY-MM-DD hh:mm:ss")}\t${stats.size}\t${file}`);

            // 读取的顺序可能与文件夹显示的目录不一样 因为是异步的 解决办法用同步
            console.timeEnd(file);
        });
    });
});