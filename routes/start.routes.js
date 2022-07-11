const router = require('express').Router();

///sing in
router.get("/singin", (req, res) => {
    res.render('singin')
});
  
//singup 
router.get("/singup", (req, res) => {
    res.render('singup')
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