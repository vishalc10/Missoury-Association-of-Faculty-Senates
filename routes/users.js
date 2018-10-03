var db = require('../config/database');
var express = require('express');
var router = express.Router();
var passport = require("passport")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET Profile page. */
router.get('/profile', function(req, res, next) {

  if(!req.user){
    return res.redirect("/")
  }
  res.render('profile', { title: 'Express', user : req.user,isLoggedIn : req.user && req.user.id ? true : false });
});

router.post('/signIn', passport.authenticate('local-login', {
  //successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/login', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}),  function(req, res) {
   // res.json({asd:'/'});
   res.json({as:"asdfasdf"})
});

  function test(req,res,next){
    next()
  }
/* POST users Sign In. */
// router.post('/signIn', function(req, res, next) {
//   console.log(req.body);
//   queryS = "select count(*) as result from users where username = '"+req.body.email+"' AND password='"+req.body.password+"'"

//   db.query(queryS,(err,resp)=>{
//      console.log(resp)
//      if(resp[0].result == 1){
//       res.redirect('/');
//      }else{
//       res.send('invalid login');
//      }

//   })

// });

//Exporting Module

// module.exports = function (app, passport) {
//   // process the login form
//   app.post('/signIn', passport.authenticate('local-login', {
//     successRedirect: '/', // redirect to the secure profile section
//     failureRedirect: '/signIn', // redirect back to the signup page if there is an error
//     failureFlash: true // allow flash messages
//   }),
//     function (req, res) {
//       console.log("hello");

//       if (req.body.remember) {
//         req.session.cookie.maxAge = 1000 * 60 * 3;
//       } else {
//         req.session.cookie.expires = false;
//       }
//       res.redirect('/');
//     });
// };

  module.exports = router;
