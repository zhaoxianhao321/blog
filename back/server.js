const http = require('http')
const url = require('url')
const querystring = require('querystring')
const mysql = require('mysql');
const crypto = require('crypto')

let db = mysql.createPool({
    host: 'localhost',
    port: '3306',	
    user: 'root',
    password:'',
    database:'blog_user'
});

function md5(str){
    let obj=crypto.createHash('md5');
    obj.update(str);
    return obj.digest('base64');
}

const server = http.createServer((req,res)=>{
    // 拿取get数据 
    let {pathname,query}=url.parse(req.url,true); 

    let arr=[];
    req.on('data',data=>{
        arr.push(data);
    });

    req.on('end',()=>{
        let post = querystring.parse(Buffer.concat(arr).toString);
        let {user,pass}=query;
        switch(pathname){
            case'/login':
                console.log(user,pass,pathname,post);
                db.query("INSERT INTO user (id,name,pass) VALUES (0,'"+user+"','"+md5(pass)+"')",(err,data)=>{
                    if(err){
                        console.log('err');
                    }else{
                        console.log('success');
                    }
                })
                res.writeHead(200); 
                res.end();
                break;
            default:
                res.end();
        }
    })

})

server.listen(8080);