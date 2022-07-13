const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        title:{
            type: String,
            trim: true,
            minLength: 2, 
            required: true,
        },
        
        status:{
            type: String,
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
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
