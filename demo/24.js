// 文件流的方式的复制

const fs = require('fs');
const path = require('path');

// 创建文件的读取流，并没有读出正式的数据，开始了读取文件的任务（）
var reader = fs.createReadStream('C:\\Users\\Desktop\\1.iso');
// 创建一个写入流
var writer = fs.createWriteStream('C:\\Users\\Desktop\\2.iso');


fs.stat('C:\\Users\\Desktop\\1.iso', (err, stats) => {
    if (stats) {
        var readTotal = 0;
        reader.on('data', (chunk) => {
            // chunk是一个buffer(字节数组)
            writer.write(chunk, (err) => {
                console.log('写进度：' + ((readTotal += chunk.length) / stats.size * 100) + '%');
            });
        });

        reader.on('end', () => {
            // 结束
        });
    }
});
