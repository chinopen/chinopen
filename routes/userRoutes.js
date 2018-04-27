const express = require("express");
const bcrypt = require("bcrypt");
const salt = 10;
const User = require("../models/User");
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
      console.log(new Date())
   
      var u = new Date();
      var hours = u.getHours();
      var mins = u.getMinutes();
      var userTime = hours + ":" + mins;
      // console.log(user.open, user.close);
      // console.log(user.open < userTime && userTime < user.close)
      if (user.open < userTime && userTime < user.close) {
        console.log("Abierto");
        let id = user._id
        const update = {
          isOpen:true
        }
        User.findByIdAndUpdate(id,update, {new : true}).then(u=>u);
      } else {
        console.log("Cerrado");
        let id = user._id
        const update = {
          isOpen:true
        }
        User.findByIdAndUpdate(id,update, {new : true}).then(u=>u);
      }
    });
  }).then( e=> {
    User.find({
      isCoords: true,
      isOpen: true
    }).then(users => {
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
      console.log(error)
    })

})
router.get("/profile/:id",(req, res,next) => { 
  User.findById(req.params.id)
  .then (users => {
   res.render("user/profile", {
    userss: JSON.stringify([users]),
    users
  })
  })
})

router.post("/ranking/:id", (req, res, next) => {
  const userId = req.params.id;
  const value = req.body.optradio;
  User.findById(userId)
  .then(user => {
    let ranking = user.ranking.unshift(+value)
    const update = {ranking:ranking}
    user.save().then((u)=>console.log(u))
    res.redirect(`/user/profile/${userId}`);
  });
});


router.get("/delete/:id", (req, res, next) => {
  const userId = req.params.id;
  User.findByIdAndRemove(userId).then(user => {
    req.session.destroy((err) => {
      if (err) {
        next(err);
        return;
      }
  
      res.redirect('/');
    });
  });
});


module.exports = router;
