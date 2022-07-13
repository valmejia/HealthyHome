const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rooms = new Schema({
    name:{
        type: String,
        trim: true,
        minLength: 2, 
        required: true,
    },
    typeHab:{
        type: String,
    },
    ub:{
        type: String
    }, 
    description:{
        type: String,
    }
})
