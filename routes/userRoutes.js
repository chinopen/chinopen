const express = require("express");
const bcrypt = require("bcrypt");
const salt = 10;
const User = require("../models/user");

const router = express.Router();

router.get("/userFirst", (req, res, next) => {
    res.render("user/userFirst", {
      errorMessage: ""
    });
  });
  router.get("/shops", (req, res, next) => {
    res.render("user/shops", {
      errorMessage: ""
    });
  });
  router.post("/changePass", (req, res, next) =>{ 
    const password = req.body.password;
    const pass = bcrypt.hashSync(password, salt)
    const userId = req.session.currentUser._id;
    const update = {password:pass}
    User.findByIdAndUpdate(userId,update)
    .then(user=>{
      console.log(user.password)
      user.password = pass;
      console.log(user.password)
            res.redirect('/');            
    })
  })
  
  router.post("/changeName", (req, res, next) =>{ 
    const username = req.body.username;
    const name = username
    const userId = req.session.currentUser._id;
    const update = {username:name}
    User.findByIdAndUpdate(userId,update)
    .then(user=>{
      console.log(user.username)
      user.username = name;
      console.log(user.username)
            res.redirect('/');            
    })
  })

  router.post("/changeOpen", (req, res, next) =>{ 
    const open = req.body.open;
    const time = open
    const userId = req.session.currentUser._id;
    const update = {open:time}
    User.findByIdAndUpdate(userId,update)
    .then(user=>{
      console.log(user.open)
      user.open = time;
      console.log(user.open)
            res.redirect('/');            
    })
  })

  router.post("/changeClose", (req, res, next) =>{ 
    const close = req.body.close;
    const time = close
    const userId = req.session.currentUser._id;
    const update = {close:time}
    User.findByIdAndUpdate(userId,update)
    .then(user=>{
      console.log(user.close)
      user.close = time;
      console.log(user.close)
            res.redirect('/');            
    })
  })

  module.exports = router;