// pipe的方式的复制

const fs = require('fs');
const path = require('path');

var reader = fs.createReadStream('C:\\Users\\Desktop\\1.iso');
var writer = fs.createWriteStream('C:\\Users\\Desktop\\2.iso');
var writer2 = fs.createWriteStream('C:\\Users\\Desktop\\3.iso');


writer.on('pipe', (src) => {});

reader
    .pipe(writer);

reader
    .pipe(writer2);
