// 递归目录树

// 先写一层的情况
// 抽象递归参数
// 找到突破点（避免死循环）
// 自己调自己，某种情况（肯定会存在的）不调用

const fs = require('fs');
const path = require('path');

require('./lib/dateFormat.js');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');

function load(target,depth) {
    // depth 0=''
    // depth 1='| '
    // depth 2='| | '

    // new Array(0).join('|');  =>  ""
    // new Array(1).join('|');  =>  ""
    // new Array(2).join('|');  =>  "|"
    // new Array(3).join('|');  =>  "||"


    var prefix=new Array(depth+1).join('│ ');


    var dirinfos = fs.readdirSync(target);

    var dirs = [];
    var files = [];

    dirinfos.forEach(info => {
        var stats = fs.statSync(path.join(target, info));
        if (stats.isFile()) {
            files.push(info);
        } else {
            dirs.push(info);
        }
    });

    dirs.forEach(dir => {
        console.log(`${prefix}├─${dir}`);
        // 当前是一个目录 需要深入进去
        load(path.join(target,dir),depth+1);
    });

    var count = files.length - 1;
    files.forEach(file => {
        console.log(`${prefix}${count-- ? '├─' : '└'}${file}`);
    });
}

load(target,0);























//======================第二层=====================
// var subdirinfos = fs.readdirSync(path.join(target, dir));

// var subdirs = [];
// var subfiles = [];

// subdirinfos.forEach(subinfo => {
//     var substats = fs.statSync(path.join(path.join(target, dir), subinfo));
//     if (substats.isFile()) {
//         files.push(subinfo);
//     } else {
//         dirs.push(subinfo);
//     }
// });

// subdirs.forEach(subdir => {
//     console.log(`├─${subdir}`);
//     // 当前是一个目录 需要深入进去

// });

// var subcount = subfiles.length - 1;
// subfiles.forEach(subfile => {
//     subfiles.forEach(subfile => {
//         console.log(`${subcount-- ? '├─' : '└'}${subfile}`);
//     });
// });
//======================第二层=====================
