// 文件写入

// 默认写入是覆盖
// 追加和写入一样  api名字不同而已（writeFile 改为appendFile）

const fs=require('fs');
const path=require('path');

// 写入文件的三种方式
// 1.fs.writeFile();

// JSON.stringify 序列化
// JSON.parse 反序列化

// fs.writeFile(path.join(__dirname,'./writeFileDemo1.txt'),'我是一个测试的写入文件',(err)=>{
//     if(err){
//         // 读文件是文件不存在时候报错
//         // 写文件出错问题如下：
//         // 意外错误
//         // 文件权限问题
//         // 文件夹找不到（不会自动创建文件夹）
//         console.log(err);
//     }else{
//         console.log('success');
//     }
// });



// 2.fs.writeFileSync();
// 同步和异步类似 只不过最好写到try{}catch(error){}里

// 3.fs.createWriteStream();
var streamWriter=fs.createWriteStream(path.join(__dirname,'./writeFileDemo1.txt'));

setInterval(()=>{
    streamWriter.write('hello',()=>{
        console.log('+1');
    })
},1000);