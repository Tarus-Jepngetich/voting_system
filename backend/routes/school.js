const { School } = require("../models/school");
const express = require("express");
const router = express.Router();

// gets all schools from the system
router.get("/", async (_, res) => {
  const schoolList = await School.find();

  if (!schoolList) {
    res.status(500).json({
      success: false,
    });
  }

  res.send(schoolList);
});

// gets a specific school
router.get("/:id", async (req, res) => {
  const school = await School.findById(req.params.id).select("-passwordHash");

  if (!school) {
    res.status(500).json({
      message: "The school with the given name was not found",
    });
  }

  res.status(200).send(school);
});

// get the count of school
router.get(`/get/count`, async (_, res) => {
  const schoolCount = await School.countDocuments();

  if (!schoolCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    schoolCount: schoolCount,
  });
});

// creating/adding a new school
router.post("/", async (req, res) => {
  let school = new School({
    name: req.body.name,
    schoolId: req.body.schoolId,
  });

  school = await school.save();

  if (!school) {
    return res.status(500).send("the user cannot be created");
  }

  res.send(school);
});

// updating
router.put("/:id", async (req, res) => {
  const school = await School.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      schoolId: req.body.schoolId,
    },
    { new: true }
  );

  if (!school) return res.status(400).send("the school cannot be updated");
  res.send(school);
});

// delete a school
router.delete("/:id", (req, res) => {
  School.findByIdAndRemove(req.params.id)
    .then((school) => {
      if (school) {
        return res
          .status(200)
          .json({ success: true, message: "School deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "School not found" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
});

module.exports = router;
