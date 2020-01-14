const http = require('http');
const url = require('url');
const querystring = require('querystring');

const httpServer = http.createServer((req,res)=>{

    let {pathname,query} = url.parse(req.url,true);
    console.log(query);
    let arr=[];
    req.on('data',data=>{
        arr.push(data);
        console.log(data);
    });
    req.on('end',()=>{
        let post=querystring.parse(Buffer.concat(arr).toString);
        if(pathname=='/a'){
          console.log(post);
          res.end();
        }
    });
});

httpServer.listen(8080);