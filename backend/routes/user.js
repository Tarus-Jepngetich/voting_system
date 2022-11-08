const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// gets all users from the system
router.get("/", async (_, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({
      success: false,
    });
  }

  res.send(userList);
});

// gets a specific user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user) {
    res.status(500).json({
      message: "The user with the given name was not found",
    });
  }

  res.status(200).send(user);
});

// get the count of users
router.get(`/get/count`, async (_, res) => {
  const userCount = await User.countDocuments();

  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    userCount: userCount,
  });
});

// creating/adding a new user
router.post("/register", async (req, res) => {
  let user = await User.findOne({ userId: req.body.userId });

  if (!user) {
    user = new User({
      name: req.body.name,
      passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
      userId: req.body.userId,
      isAdmin: req.body.isAdmin,
    });

    user = await user.save();

    if (!user) {
      return res.status(500).send("the user cannot be created");
    }

    res.send(user);
  } else {
    return res
      .status(404)
      .json({ success: false, message: "user already exists" });
  }
});

// login api
router.post("/login", async (req, res) => {
  const user = await User.findOne({ userId: req.body.userId });
  const secret = process.env.secret;

  if (!user) {
    return res.status(400).send("User not found!");
  }

  if (user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.userId,
        isAdmin: user.isAdmin,
      },
      secret,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).send({ user: user.userId, token: token });
  } else {
    return res.status(400).send("wrong password");
  }
});

// updating
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      userId: req.body.userId,
      passwordHash: req.body.passwordHash,
      isAdmin: req.body.isAdmin,
    },
    { new: true }
  );

  if (!user) return res.status(400).send("the user cannot be updated");
  res.send(user);
});

// delete a user
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).json({ success: true, message: "User deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
});

module.exports = router;
