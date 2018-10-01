var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
  
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET Profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

/* GET Login page. */
router.get('/reset', function(req, res, next) {
  res.render('reset', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET officers page. */
router.get('/officers', function(req, res, next) {
  res.render('officers', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET 13 Universities page page. */
router.get('/13universities', function(req, res, next) {
  res.render('13universities', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET designated voters page. */
router.get('/designated_voters', function(req, res, next) {
  res.render('designated_voters', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET meetings page. */
router.get('/meetings', function(req, res, next) {
  res.render('meetings', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET report page. */
router.get('/report', function(req, res, next) {
  res.render('report', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

/* GET Login page. */
router.get('/newsletter', function(req, res, next) {
  res.render('newsletter', { title: 'Express', isLoggedIn : req.user && req.user.id ? true : false });
});

module.exports = router;
