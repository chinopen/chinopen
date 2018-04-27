require("dotenv").config();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const mongoose = require("mongoose");
const User = require("../models/User");
const dbURL = process.env.DBURL;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to Mongo!"); 
    const salt = bcrypt.genSaltSync(bcryptSalt);
   return User.create([
      {
        username: "Chino al lado de IH",
        email: "Chin@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.393226, -3.697712]
        },
        open: "08:00",
        close: "10:00",
        ranking: [1,1,1]
      },

      {
        username: "Su San A",
        email: "Su@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.404453, -3.713784]  
        },
        open: "08:00",
        close: "22:00",
        ranking: [4,4,3]
      },
      
      {
        username: "Sao Chin Huan",
        email: "Sao@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.38629158029149, -3.703437719708498]
        },
        open: "08:00",
        close: "23:00",
        ranking: [4,3,5],
      },
      
      {
        username: "Uan Tchu Fri",
        email: "Uan@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.38457348029149,-3.701725519708498]
        },
        open: "08:00",
        close: "23:00",
        ranking: [2,3,4]
      },
      
      {
        username: "Fol Fai Six",
        email: "Fol@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.398737, -3.699081]
        },
        open: "08:00",
        close: "24:00",
        ranking: [4,3,2]
      },  
      {
        username: "Hai Zen Chiu",
        email: "Hai@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3874047802915,-3.685516119708498]
        },
        open: "08:00",
        close: "23:30",
        ranking: [4,3,4]
      },
  
      {
        username: "Gi Hol Gio",
        email: "Giholgio@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.397257,-3.700531]
        },
        open: "08:00",
        close: "23:30",
        ranking: [4,3,3]
      },  
      {
        username: "Vi Hct Hol",
        email: "Victol@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.394836,-3.709621]
        },
        open: "08:00",
        close: "24:00",
        ranking: [4,3,4]
      },

  
      {
        username: "Bel Te Lan",
        email: "Beltelan@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.392021,-3.702353]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },
      
      {
        username: "Si Chuan Xiu",
        email: "Si@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.398699,-3.707353]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Fun Fu",
        email: "fun@h.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3947898802915,-3.693645919708497]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Fi Lu Chan",
        email: "fi@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3969189802915,-3.696761019708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Alimentacion",
        email: "ali@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3966153802915,-3.697338919708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Chu Chu Huan",
        email: "chu@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.39716258029149,-3.694837719708497]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Hen Zu",
        email: "hen@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3915247802915,-3.691484419708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Mali Blan",
        email: "mali@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3927952802915,-3.703852219708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Xiun Xie",
        email: "xiun@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3989695802915,-3.700172219708497]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Xie Huan",
        email: "xie@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3912877802915,-3.690294619708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Estel Testel",
        email: "estel@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.3896813802915,-3.687931419708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },

      {
        username: "Ul",
        email: "ul@h.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        isCoords: true,
        isOpen: true,
        loc: {
            type : "Point",
            coordinates: [40.40097318029149,-3.701299319708498]
        },
        open: "08:00",
        close: "22:00",
        ranking: [2,3,5]
      },  


      





      
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
