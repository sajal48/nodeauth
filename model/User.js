const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    username : {
        type:String,
        required: true,
        min:6
    },
    name : {
        type:String,
        required: true,
        min: 3
    },
    email : {
        type:String,
        required: true,
        min: 10
    },
    password : {
        type:String,
        required: true,
        max: 1024,
        min: 6
    },
    date : {
        type:Date,
        default:Date.now
    } 
});

module.exports = mongoose.model('User',userScema);