const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//about us 
router.get("/aboutus", (req, res) => {
  res.render('aboutus')
});

//contact us
router.get("/contactus", (req, res) => {
  res.render('contactus')
});

///////////////////////////////////////////////////////////////////////////////

router.get("/employeehome", (req, res) => {
  res.render('employeehome')
});

module.exports = router;