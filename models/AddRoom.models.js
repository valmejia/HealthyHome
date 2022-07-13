const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema(
    {
        name:{
            type: String,
            trim: true,
            minLength: 2, 
            required: true,
        },
        room:{
            type: String,
            required: true,
        },
        ubication:{
            type: String,
            
        },
        description:{
            type: String,
            required: true,
        },
   
    }
);

