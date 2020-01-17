const crypto = require('crypto');

exports.reg = function(req,res){
    console.log(req.body);
    return res.json({
        status_code: 200,
        message: '注册成功！',
        data: null
    })
}