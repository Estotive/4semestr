var express = require('express')
var router = express.Router()
var Hero = require("../models/hero").Hero


/* GET home page. */
router.get('/', function(req, res, next) {
    Hero.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                menu: menu
                            });
    })

});

module.exports = router;



/* Страница Нацу */
/*router.get('/natsu', function(req, res, next) {
  res.render('hero', {
      title: "Нацу",
      picture: "https://i.pinimg.com/736x/56/10/02/5610024548859fb781dd2e46a2d8a577.jpg",
      desc: "Огненный убийца драконов"
  });
});

/* Страница "Эльзы" */
/*router.get('/elza', function(req, res, next) {
  res.render('hero', {
      title: "Эльза",
      picture: "https://i.pinimg.com/564x/d3/b3/8d/d3b38d4683c8327e2f0ebf61f067a6b1.jpg",
      desc: "Владеет магией 'Перевооружение: Рыцарь'"
  });
});

/* Страница Хэппи */
/*router.get('/happy', function(req, res, next) {
  res.render('hero', {
      title: "Хэппи",
      picture: "https://i.pinimg.com/564x/cf/1f/bc/cf1fbcdb1bcdad29c45dfd1056aa1e44.jpg",
      desc: "Синий летающий кот"
  });
});*/


module.exports = router;