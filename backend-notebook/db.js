const mongoose = require('mongoose');

 mongoose.set('strictQuery', true);

 const DB = "mongodb://localhost:27017/bosonData"

const connectToMongo = ()=>{
    mongoose.connect(DB, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;