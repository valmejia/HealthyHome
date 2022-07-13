const router = require('express').Router();

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

module.exports = router;