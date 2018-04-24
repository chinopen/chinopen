const express = require("express");

const User = require("../models/user");

const router = express.Router();

// router.get("/userFirst", (req, res, next) => {
//     res.render("user/userFirst", {
//       errorMessage: ""
//     });
//   });

  router.get("/shops", (req, res, next) => {
    res.render("user/shops", {
      errorMessage: ""
    });
  });
  router.get('/userFirst', (req, res, next) => {
    console.log('entra')
    User.find().then( (users)  => {
      console.log(users);
      res.render("user/userFirst",{users:JSON.stringify(users)});
    })
  });


  module.exports = router;