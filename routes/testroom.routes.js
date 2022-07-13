const router = require("express").Router()
const Task = require("../models/Task.model")
//////////////////////////ROOMS ROUTES////////////////////

//testroom
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.render('testroom', {
      todo: tasks.filter(task => task.status == 'todo'),
      inProgress: tasks.filter(task => task.status == 'in_progress'),
      done: tasks.filter(task => task.status == 'done'),
      tasks,
    })
  } catch(e) {
    console.warn(e);
  }
});


router.get("/new", (req, res) => {
  res.render('new_testroom');
})

router.post("/create", async (req, res) => {
  const newModel = new Task({
    title: req.body.title,
    status: 'todo',
  });

  await newModel.save()

  res.redirect('/testroom');
})

module.exports = router;
