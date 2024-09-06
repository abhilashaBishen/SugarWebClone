
const mongoose = require('mongoose');

//define the user schema

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required: true,
        type: String
    }
})

//create User model

const User = mongoose.model('User',userSchema);

module.exports = User;