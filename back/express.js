const express = require('express'); // 主体
const body = require('body-parser'); // 接收普通post数据

let server = express();
server.listen(8080);

server.get('/login',(req,res)=>{
    res.send('12345644');
});
