const router = require('express').Router();

//about us 
router.get("/aboutus", (req, res) => {
    res.render('aboutus')
  });
  
  //contact us
  router.get("/contactus", (req, res) => {
    res.render('contactus')
  });

module.exports = router;