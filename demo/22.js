// 通过自定义模块创建多层目录

var mkdirs = require('./module/mkdirs');
var path = require('path');

// mkdirs(path.join(__dirname, 'f1/f2/f3'), (err) => { console.log(err); });


mkdirs('./f1/f2/f3/f4/f5', (err) => { console.log(err); });



//  Node 4.x  NPM 2.x 递归依赖

// project/node_modules/fs-ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/



// 3.x 平行依赖

// project/node_modules/fs-ext/
// project/node_modules/ext/
// project/node_modules/123/
// project/node_modules/fs1/
// project/node_modules/fs2/