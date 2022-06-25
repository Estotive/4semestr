var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Нацу */
router.get('/natsu', function(req, res, next) {
  res.send("<h1>Страница Нацу</h1>")
});
/* Страница "Эльзы" */
router.get('/elza', function(req, res, next) {
  res.send("<h1>Страница Эльзы</h1>")
});
/* Страница Хэппи */
router.get('/happy', function(req, res, next) {
  res.send("<h1>Страница Хэппи</h1>")
});


module.exports = router;