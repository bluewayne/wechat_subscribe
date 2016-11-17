/**
 * Created by liujinhe on 16/11/17.
 */

var express = require('express');
var router = express.Router();

var wechat=require('wechat');
var config=require('../config.js');

router.use('/',wechat(config, function (req,res,next) {

    var message =req.weixin;

    console.log("message.FromUserName   :"+message.FromUserName);
    if(message.FromUserName==='josie'){
        res.reply('josie ,i love u');
    }else if(message.FromUserName==='text'){
        res.reply({
            content:'text object',
            type:'text'
        });
    }else if (message.FromUserName==='bruce'){
        res.reply([{
            title:'bruce image',
            description:'handsome man',
            picurl:'https://thumbnail0.baidupcs.com/thumbnail/350d07783373b400572909c630380da0?fid=1611053139-250528-982053039&time=1479348000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-tyuWBW0H4z9T0k3xOSdyqkqzzas%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7454879872299697244&dp-callid=0&size=c710_u400&quality=100',
            url:'https://pan.baidu.com/s/1kV8WWb9'
        }])
    }
}));

module.exports=router;