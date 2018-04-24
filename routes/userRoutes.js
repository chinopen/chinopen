const express = require("express");
const bcrypt = require("bcrypt");
const salt = 10;
const User = require("../models/user");
const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyDlSmRpGl2kaSE2_ZK-5X6OiA5942IFepI",
  Promise: Promise
});

const router = express.Router();

router.get("/shops", (req, res, next) => {
  res.render("user/shops", {
    errorMessage: ""
  });
});
router.post("/changePass", (req, res, next) => {
  const password = req.body.password;
  const pass = bcrypt.hashSync(password, salt)
  const userId = req.session.currentUser._id;
  const update = {
    password: pass
  }
  User.findByIdAndUpdate(userId, update)
    .then(user => {
      user.password = pass;
      res.redirect('/');
    })
})

router.post("/changeName", (req, res, next) => {
  const username = req.body.username;
  const name = username
  const userId = req.session.currentUser._id;
  const update = {
    username: name
  }
  User.findByIdAndUpdate(userId, update)
    .then(user => {
      user.username = name;
      res.redirect('/');
    })
})

router.post("/changeOpen", (req, res, next) => {
  const open = req.body.open;
  const time = open
  const userId = req.session.currentUser._id;
  const update = {
    open: time
  }
  User.findByIdAndUpdate(userId, update)
    .then(user => {
      user.open = time;
      res.redirect('/');
    })
})
router.get('/userFirst', (req, res, next) => {
  User.find({
    isCoords: true
  }).then((users) => {
    res.render("user/userFirst", {
      users: JSON.stringify(users)
    });
  })
});

router.post("/changeClose", (req, res, next) => {
  const close = req.body.close;
  const time = close
  const userId = req.session.currentUser._id;
  const update = {
    close: time
  }
  User.findByIdAndUpdate(userId, update)
    .then(user => {
      user.close = time;
      res.redirect('/');
    })
})

router.post("/addAddress", (req, res, next) => {
  const address = req.body.direccion;

  let lat;
  let lng;
  googleMapsClient.geocode({
      address
    })
    .asPromise()
    .then(data => {
      lat = data.json.results[0].geometry.viewport.northeast.lat;
      lng = data.json.results[0].geometry.viewport.northeast.lng;
      const userId = req.session.currentUser._id;
      const update = {
        loc: {
          coordinates: [lat, lng]
        },
        isCoords: true
      }
      // User.findOne({ _id: userId})
      User.findByIdAndUpdate(userId, update)
        .then(user => {

          res.redirect("/user/userFirst")
        })
    })
    .catch(error => {
      console.log(error)
    })

router.get("/place/:id",(req, res,next) => {
  user.findById(req.params.id)
  .then (place => {
   res.render("profile", place)
   
  })
})


})

router.get("/place/:id",(req, res,next) => {
  user.findById(req.params.id)
  .then (place => {
   res.render("profile", place)
  
  })
 })

module.exports = router;