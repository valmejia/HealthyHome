const mongoose = require('mongoose')
const Schema = mongoose.Schema

const task = new Schema({
    
    name:{
        type: String,
        trim: true,
        minLength: 2, 
        required: true,
    },
    typeTask:{
        type: String,
    },
    ub:{
        type: String
    }, 
    description:{
        type: String,
    },
    time:{
        type: Number,
    }
})

