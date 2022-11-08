const { Contestant } = require("../models/contestant");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { default: mongoose } = require("mongoose");

// creating the file types that can be uploaded in our system
const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("Invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    // const filename = file.originalname.replace(' ', '-');
    const filename = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${filename}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

// updating contestant information
router.put("/:id", uploadOptions.single("image"), async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Invalid contestant id");
  }

  const file = req.file;
  let imagePath;

  if (file) {
    const filename = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    imagePath = `${basePath}${filename}`;
  }

  const updatedContestant = await Contestant.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description,
      votes: req.body.votes,
      image: imagePath,
    },
    { new: true }
  );

  if (!updatedContestant) {
    return res.status(500).send("the contestant cannot be updated");
  }

  res.send(updatedContestant);
});

// gets all contestants from the system
router.get("/", async (_, res) => {
  const contestantList = await Contestant.find();

  if (!contestantList) {
    res.status(500).json({
      success: false,
    });
  }

  res.send(contestantList);
});

// gets a specific user
router.get("/:id", async (req, res) => {
  const contestant = await Contestant.findById(req.params.id).select(
    "-passwordHash"
  );

  if (!contestant) {
    res.status(500).json({
      message: "The contestant with the given name was not found",
    });
  }

  res.status(200).send(contestant);
});

// get the count of contestant
router.get(`/get/count`, async (_, res) => {
  const contestantCount = await Contestant.countDocuments();

  if (!contestantCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    contestantCount: contestantCount,
  });
});

// creating/adding a new contestant
router.post("/", uploadOptions.single("image"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send("No image in the request");
  const filename = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  let contestant = new Contestant({
    student: req.body.student,
    description: req.body.description,
    image: `${basePath}${filename}`,
  });

  contestant = await contestant.save();

  if (!contestant) {
    return res.status(500).send("the contestant cannot be created");
  }

  res.send(contestant);
});

// login api
router.post("/login", async (req, res) => {
  const contestant = await Contestant.findOne({
    contestantId: req.body.contestantId,
  });
  const secret = process.env.secret;

  if (!contestant) {
    return res.status(400).send("Contestant not found!");
  }

  if (
    contestant &&
    bcrypt.compareSync(req.body.passwordHash, contestant.passwordHash)
  ) {
    const token = jwt.sign(
      {
        userId: contestant.userId,
        isAdmin: contestant.isAdmin,
      },
      secret,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).send({ user: contestant.userId, token: token });
  } else {
    return res.status(400).send("wrong password");
  }
});

// updating
router.put("/:id", async (req, res) => {
  const contestant = await Contestant.findByIdAndUpdate(
    req.params.id,
    {
      image: req.body.image,
      description: req.body.description,
      votes: req.body.votes,
    },
    { new: true }
  );

  if (!contestant)
    return res.status(400).send("the contestant cannot be updated");
  res.send(contestant);
});

// delete a contestant
router.delete("/:id", (req, res) => {
  Contestant.findByIdAndRemove(req.params.id)
    .then((contestant) => {
      if (contestant) {
        return res
          .status(200)
          .json({ success: true, message: "Contestant deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "contestant not found" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
});

module.exports = router;
