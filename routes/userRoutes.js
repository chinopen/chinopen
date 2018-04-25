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
  const pass = bcrypt.hashSync(password, salt);
  const userId = req.session.currentUser._id;
  const update = {
    password: pass
  };
  User.findByIdAndUpdate(userId, update).then(user => {
    user.password = pass;
    res.redirect("/user/shops");
  });
});

router.post("/changeName", (req, res, next) => {
  const username = req.body.username;
  const name = username;
  const userId = req.session.currentUser._id;
  const update = {
    username: name
  };
  User.findByIdAndUpdate(userId, update).then(user => {
    user.username = name;
    res.redirect("/user/shops");
  });
});

router.post("/changeOpen", (req, res, next) => {
  const open = req.body.open;
  const time = open;
  const userId = req.session.currentUser._id;
  const update = {
    open: time
  };
  User.findByIdAndUpdate(userId, update).then(user => {
    user.open = time;
    res.redirect("/user/shops");
  });
});

router.get("/userFirst", (req, res, next) => {
  User.find().then(users => {
    users.forEach((user) => {
      console.log(user.username)
      var u = new Date();
      var hours = u.getHours();
      var mins = u.getMinutes();
      var userTime = hours + ":" + mins;
      console.log(user.open, user.close);
      console.log(user.open < userTime && userTime < user.close)
      if (user.open < userTime && userTime < user.close) {
        console.log("Abierto");
        let id = user._id
        const update = {
          isOpen:true
        }
        User.findByIdAndUpdate(id,update, {new : true}).then(u=>console.log(u));
      } else {
        console.log("Cerrado");
        let id = user._id
        const update = {
          isOpen:false
        }
        User.findByIdAndUpdate(id,update, {new : true}).then(u=>console.log(u));
      }
    });
  }).then( e=> {
    User.find({
      isCoords: true,
      isOpen: true
    }).then(users => {
      console.log(users);
      res.render("user/userFirst", {
        users: JSON.stringify(users)
      });
    })
  }
    
  )
  
});

router.post("/changeClose", (req, res, next) => {
  const close = req.body.close;
  const time = close;
  const userId = req.session.currentUser._id;
  const update = {
    close: time
  };
  User.findByIdAndUpdate(userId, update).then(user => {
    user.close = time;
    res.redirect("/user/shops");
  });
});

router.post("/addAddress", (req, res, next) => {
  const address = req.body.direccion;

  let lat;
  let lng;
  googleMapsClient
    .geocode({
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
      };
      // User.findOne({ _id: userId})
      User.findByIdAndUpdate(userId, update).then(user => {
        res.redirect("/user/userFirst");
      });
    })
    .catch(error => {
<<<<<<< HEAD
      console.log(error)
    })

})
router.get("/profile/:id",(req, res,next) => {
  User.findById(req.params.id)
  .then (place => {
   res.render("user/profile", place)
   
  })
})



// router.get("/profile/:id",(req, res,next) => {
//   User.findById(req.params.id)
//   .then (place => {
//     console.log(place)
//    res.render("profile", {place})
  
//   })
//  })
=======
      console.log(error);
    });

  router.get("/place/:id", (req, res, next) => {
    user.findById(req.params.id).then(place => {
      res.render("profile", place);
    });
  });
});
>>>>>>> fc7761fdbef6dab9f0a95cde27c58f0d636b6f4f

module.exports = router;
