var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET Login page. */
router.get('/reset', function(req, res, next) {
  res.render('reset', { title: 'Express' });
});

/* GET officers page. */
router.get('/officers', function(req, res, next) {
  res.render('officers', { title: 'Express' });
});

/* GET 13 Universities page page. */
router.get('/13universities', function(req, res, next) {
  res.render('13universities', { title: 'Express' });
});

/* GET designated voters page. */
router.get('/designated_voters', function(req, res, next) {
  res.render('designated_voters', { title: 'Express' });
});

/* GET meetings page. */
router.get('/meetings', function(req, res, next) {
  res.render('meetings', { title: 'Express' });
});

/* GET report page. */
router.get('/report', function(req, res, next) {
  res.render('report', { title: 'Express' });
});

/* GET Login page. */
router.get('/newsletter', function(req, res, next) {
  res.render('newsletter', { title: 'Express' });
});

module.exports = router;
