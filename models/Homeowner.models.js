const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type: String,
        trim: true,
        minLength: 2, 
        required: true,
    },
    rol:{
        type: String,
    },
    email:{
        type: String,
    },
    numHab:{
        type: Number,
    }, 
    numKids: {
        type: Number,
    },
    ageKids:{
        type: Number,
    },
    numPet:{
        type: pet,
    },
    numHab: {
        type: string,
    },
    typeHo:{
        type: String,
    }
})

