// 建立socket客户端

const net = require('net');

const socket = net.connect({ port: 2080 }, () => {
  console.log('已经连接到服务端!');


  process.stdout.write('\nclient > ');
  process.stdin.on('data', (chunk) => {
    // 控制台输入回车
    // console.log(chunk.toString().trim());
    socket.write(chunk.toString().trim());

    process.stdout.write('\nclient >');
  });

  socket.on('data', (data) => {
    console.log('\n' + data.toString());
  });
});







// socket.on('end', () => {
//   console.log('disconnected from server');
// });