const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    usename : {
        type : String
    },

    password : {
        type : String
    },

    chain : [Object]

})

const User = mongoose.model('User', userSchema)

module.exports = User;