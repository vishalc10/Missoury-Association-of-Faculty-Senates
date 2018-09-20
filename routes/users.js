var db = require('../config/database');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users Sign In. */
router.post('/signIn', function(req, res, next) {
  console.log(req.body);
  queryS = "select count(*) as result from users where username = '"+req.body.email+"' AND password='"+req.body.password+"'"

  db.query(queryS,(err,resp)=>{
     console.log(resp)
     if(resp[0].result == 1){
      res.redirect('/');
     }else{
      res.send('invalid login');
     }
    
  })
  
});

module.exports = router;
