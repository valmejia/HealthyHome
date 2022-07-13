const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
    roomName:{
        type: String,
        trim: true,
        required: true,
    },
    // roomType: {
    //     type: String,
    // },
    // location:{
    //     type: String
    // },
    // description:{
    //     type: String,
    // }
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
