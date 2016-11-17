var express = require('express');
var router = express.Router();
var User=require('../models/user.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.post('/register', function (req, res, next) {
  var name=req.body.name;
  var password=req.body.password;

  console.log('req.body  :'+JSON.stringify(req.body));

  console.log('name :'+name);

  console.log('password :'+password);

  User.create({
    "name":name,
    "password":password
  }, function (err,user) {
    if(err){
      console.log('register failed with err');
      res.json('register failed with err');
    }
    console.log('register success'+user);
    res.json('register success')

  });

})

router.post('/login', function (req,res,next) {

  var name=req.body.name;
  var password=req.body.password;
  User.findOne({
    "name":name,
    "password":password
  }, function (err,user) {
    if(err){
      res.json('login fail'+err);
    }

    res.json('login success '+user);

  })



});



module.exports = router;
