const express = require("express");

// const User = require("../models/user");

const router = express.Router();

router.get("/userFirst", (req, res, next) => {
    res.render("user/userFirst", {
      errorMessage: ""
    });
  });