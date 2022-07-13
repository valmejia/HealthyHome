const router = require("express").Router()

//////////////////////////ROOMS ROUTES////////////////////
//bathroom
router.get("/bathroom", (req, res) => {
    res.render('bathroom')
  });
  //garage
  router.get("/garage", (req, res) => {
    res.render('garage')
  });
  //kitchen
  router.get("/kitchen", (req, res) => {
    res.render('kitchen')
  });
  //livingroom
  router.get("/livingroom", (req, res) => {
    res.render('livingroom')
  });
  //myroom
  router.get("/myroom", (req, res) => {
    res.render('myroom')
  });
  //adroom
  router.get("/addroom", (req, res) => {
    res.render('addroom')
  });

  router.get("/addtask", (req, res) => {
    res.render('addtask')
  });

module.exports = router