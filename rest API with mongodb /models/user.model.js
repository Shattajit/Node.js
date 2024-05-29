const mongoose = require('mongoose');


// create schema

const newSchema = new mongoose.Schema({
    id : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require: true
    },
    age : {
        type : Number,
        require : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }
});

const User = mongoose.model("User" ,newSchema);

module.exports = User;