const crypto = require('crypto');
const mysql = require('mysql');

// md5加密
function md5(str){
    let obj=crypto.createHash('md5');
	
	obj.update(str);
	
	return  obj.digest('base64')
}

let db = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    database:'blog_user'
})

exports.reg = function(req,res){
    let {user,pass} =req.body;

    db.query("INSERT INTO user (id,name,pass) VALUES(0,'"+ user +"','"+ md5(pass) +"')",(err,data)=>{

            return res.json({
                status_code: 200,
                message: '用户注册成功！',
                data: null
            });
    });
}