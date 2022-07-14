const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

///////////////////////////////////////// PREGUNTAR////////////////////////////

//user
router.get("/user", (req, res) => {
  res.render('user')
});
//employee
router.get("/employee", (req, res) => {
  res.render('employee')
});
//sendlink 
router.get("/sendlink", (req, res) => {
  res.render('sendlink')
});
///////////////////////////////////////////////////////////////////////////////


////////////////////////
router.get("/taskhome", (req, res) => {
  res.render('taskhome')
});

router.get("/employeehome", (req, res) => {
  res.render('employeehome')
});


module.exports = router;
