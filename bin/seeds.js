require("dotenv").config();


const mongoose = require("mongoose");
const User = require("../models/User");
const dbURL = process.env.DBURL;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to Mongo!");
   return User.create([
      {
        username: "Chin Hun Huai",
        email: "String@m.com",
        password: "a",
        isShop: true,
        loc: {
            type : "Point",
            coordinates: [40.4095426, -3.6927179]
        },
        open: "08:00",
        close: "24:00"
      }
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
