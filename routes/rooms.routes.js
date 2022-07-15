const router = require("express").Router()
const Room = require('../models/Room.model');

const Task = require("../models/Task.model");

//////////////////////////ROOMS ROUTES////////////////////
router.get("/", async (req, res) => {
    try {
        const rooms = await Room.find({});
        console.log(rooms)
        res.render('rooms/index',{rooms})
      } catch(e) {
        console.warn(e);
      }
});

router.get("/show/:roomId", async (req, res) => {
    try {
      const room = await Room.findOne({_id: req.params.roomId});
      const tasks = await Task.find({room_id: req.params.roomId})
      console.log(room)
      res.render('rooms/show', {room, tasks})
    } catch(e) {
      console.warn(e);
    }
});

router.get("/new", (req, res) => {
    res.render('rooms/new');
});


router.post("/create", async (req, res) => {
    const newModel = new Room({
        roomName: req.body.room_name,
        ubication: req.body.ubication,
        description: req.body.description
    });
  
    await newModel.save()
  
    res.redirect('/rooms');
})

module.exports = router