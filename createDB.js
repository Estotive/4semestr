var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero
var async = require("async")
var data = require('./data.js').data

async.series([
        open,
        dropDatabase,
        createHeroes,
        close
    ],
    function(err,result){
        if(err) throw err
        console.log("ok")
    })

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback){
    data = [
        { title: "Нацу", nick: "natsu" },
        { title: "Эльза", nick: "elza" },
        { title: "Хэппи", nick: "happy" },
    ]
    async.each(data, function(heroData, callback){
            var hero = new mongoose.models.Hero(heroData)
            hero.save(callback)
        },
        callback)
}

function close(callback){
    mongoose.disconnect(callback)
}
