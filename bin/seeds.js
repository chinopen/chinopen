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
    //const hashedPass = bcrypt.hashSync(password, salt);
   return User.create([
      {
        username: "Chino al lado de IH",
        email: "Chin@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.393226, -3.697712]
        },
        open: "08:00",
        close: "24:00"
      },

      {
        username: "Su San A",
        email: "Su@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.404453, -3.713784]
        },
        open: "08:00",
        close: "22:00"
      },
      
      {
        username: "Sao Chin Huan",
        email: "Sao@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.400073,-3.705990]
        },
        open: "08:00",
        close: "23:00"
      },
      
      {
        username: "Uan Tchu Fri",
        email: "Uan@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.397757, -3.701784]
        },
        open: "08:00",
        close: "23:00"
      },
      
      {
        username: "Fol Fai Six",
        email: "Fol@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.398737, -3.699081]
        },
        open: "08:00",
        close: "24:00"
      },  
      {
        username: "Hai Zen Chiu",
        email: "Hai@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.397257, -3.700531]
        },
        open: "08:00",
        close: "23:30"
      },
  
      {
        username: "Gi Hol Gio",
        email: "Giholgio@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.394836, -3.709621]
        },
        open: "08:00",
        close: "23:30"
      },  
      {
        username: "Vi Hct Hol",
        email: "Victol@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.392021, -3.702353]
        },
        open: "08:00",
        close: "24:00"
      },

  
      {
        username: "Bel Te Lan",
        email: "Beltelan@m.com",
        password: bcrypt.hashSync("a", salt),
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.398699, -3.707353]
        },
        open: "08:00",
        close: "22:00"
      },


      
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
