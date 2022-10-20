const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt')

// register user

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass
  try {
    const present = await User.findOne({
      username: req.body.username,
    });
    if(present){
    return res.status(400).json({ message: "invalid credentials" });
    }else{
      const newuser = new User(req.body);
      const user = await newuser.save();
      res.send("User Created Successfully");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});



router.post("/login", async (req, res) => {
  const {username,password} = req.body
  try {
    const user = await User.findOne({
      username: username
    });
    const validity = await bcrypt.compare(password, user.password);
    if (!validity) {
     return res.status(400).json("wrong password");
    }
    if (user) {
      const { password, ...other } = user._doc;
      res.send(other);
    } else {
      return res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});



router.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);

    const user = await User.findOne({ _id: req.body._id });

    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});


router.get("/getallusers", async(req, res) => {
  
  try {
      const users = await User.find()
      res.send(users)
  } catch (error) {
      return res.status(400).json({ error });
  }

});


module.exports = router;
