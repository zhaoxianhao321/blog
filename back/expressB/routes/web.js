var express = require('express');
var router = express.Router();
var user = require('../controller/user');


router.post('/reg',(req,res)=>{
    user.reg(req,res)
});

module.exports = router;

