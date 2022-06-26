var async = require ("async")
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero
mongoose.connection.on("open",function(){
    var db = mongoose.connection.db
    db.dropDatabase(function(err){
        if(err) throw err

        async.parallel([
            function(callback){
                var natsu = new Hero({nick:"natsu"})
                natsu.save(function(err,natsu){
                    callback(err,"natsu")
                })
            },
            function(callback){
                var elza = new Hero({nick:"elza"})
                elza.save(function(err,elza){
                    callback(err,"elza")
                })
            },
            function(callback){
                var happy = new Hero({nick:"happy"})
                happy.save(function(err,happy){
                    callback(err,"happy")
                })
            }
        ],
        function(err,result){
            if(err){
                console.log(err)
            } else {
                console.log("Успешно созданы герои с никами: " +result.join(", "))
            }
            mongoose.disconnect()
        })
    })
})
