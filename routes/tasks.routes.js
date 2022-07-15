const router = require('express').Router();
const Room = require('../models/Room.model');
const Task = require('../models/Task.model')

router.get("/", async (req, res) => {
    try {
      const roomsWithTasks = await Room.aggregate([
        {
          $lookup: {
            from: "tasks",
            localField: "_id",
            foreignField: "roomId",
            as: "tasks",
          },
        },
      ])
      .exec()
      const enrichedRooms = [...roomsWithTasks]
        .map(room => ({
          ...room,
          tasks: room.tasks.map(t => ({
            ...t,
            isDone: t.status == 'done',
            isInProgress: t.status == 'in_progress',
            isToDo: t.status == 'todo',
          }))
        }));


      // res.json(roomsWithTasks)
      // return;
        console.log(enrichedRooms)
      res.render('tasks/index', {
        rooms: enrichedRooms,
      })
    } catch(e) {
      console.warn(e);
    }
});


router.get("/new", async (req, res) => {
  // 1. query all rooms
  const rooms = await Room.find({});
  // 2. pass rooms to the template
  res.render('tasks/new', {
    rooms:rooms,
  })
});

router.post("/create", async (req, res) => {
  
  const newModel = new Task({
    title: req.body.title,
    status: 'todo',
    roomId: req.body.room_id,
  });

  await newModel.save()

  res.redirect('/tasks');
})


router.post('/:task_id', (req, res, next) => {
  const { task_id } = req.params;
  const { status } = req.body;
  
  Task.findByIdAndUpdate(task_id, { status }, { new: true })
    .then((task) => {
      console.log(task)
      res.redirect('/tasks/')
    }) // go to the details page to see the updates
    .catch(error => next(error));
});

module.exports = router;
