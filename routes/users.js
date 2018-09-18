var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users Sign In. */
router.post('/signIn', function(req, res, next) {
  console.log(req.body);
  if(req.body.username == "admin" && req.body.password == "admin"){
    res.send('valid login');
  }
  else{
    res.send('invalid login');
  }
});

module.exports = router;
