const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

///sign in
router.get("/signin", (req, res) => {
  res.render('signin')
});

//signup 
router.get("/signup", (req, res) => {
  res.render('signup')
});

//get req.body
router.post('/signup', (req, res) => {
res.send('user')
});

//about us 
router.get("/aboutus", (req, res) => {
  res.render('aboutus')
});

//contact us
router.get("/contactus", (req, res) => {
  res.render('contactus')
});

///////////////////////////////////////// PREGUNTAR////////////////////////////
router.get("/welcome", (req, res) => {
  res.render('welcome')
});
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
