const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema(
    {
        roomName:{
            type: String,
            trim: true,
            required: true,
        },
        code: {
            type: String,
        },
        ubication:{
            type: String
        },
        description:{
            type: String,
        }, 
        task:[
            {
                type: Schema.Types.ObjectId, ref: 'Task'
            }
        ]
    }
)

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
