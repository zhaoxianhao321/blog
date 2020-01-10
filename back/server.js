const http = require('http');
const url = require('url');
const querystring = require('querystring');

const httpServer = http.createServer((req,res)=>{

    console.log(url.parse(req.url,true));

    let arr=[];
    req.on('data',data=>{
        arr.push(data);
    });
    req.on('end',()=>{
        let post=querystring.parse(Buffer.concat(arr).toString);
        console.log()
    });
});

httpServer.listen(8080);