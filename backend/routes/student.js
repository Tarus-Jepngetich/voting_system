const { Student } = require("../models/student");
const express = require("express");
const router = express.Router();

// gets all students from the system
router.get("/", async (_, res) => {
  // let userList = null;
  const studentList = await Student.find().populate(["school", "user"]);

  if (!studentList) {
    res.status(500).json({
      success: false,
    });       
  }

  res.send(studentList);

  //   Student.find()
  //     .then((studentList) => {
  //       res.send(studentList);
  //     })
  //     .catch(() => {
  //       res.status(500).json({
  //         success: false,
  //       });
  //     });
});

// gets a specific student
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id)
    .populate(["user", "school"])
    .select("-passwordHash")   

  if (!student) {
    res.status(500).json({
      message: "The student with the given name was not found",
    });
  }

  res.status(200).send(student);
});

// get the count of student
router.get(`/get/count`, async (_, res) => {
  const studentCount = await Student.countDocuments();

  if (!studentCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    userCount: studentCount,
  });
});

// creating/adding a new student
router.post("/", async (req, res) => {
  let student = new Student({
    user: req.body.user,
    school: req.body.school,
  });

  student = await student.save();

  if (!student) {
    return res.status(500).send("the student cannot be created");
  }

  res.send(student);
});

// updating
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      hasVoted: req.body.hasVoted,
    },
    { new: true }
  );

  if (!student) return res.status(400).send("the student cannot be updated");
  res.send(student);
});

// delete a student
router.delete("/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id)
    .then((student) => {
      if (student) {
        return res
          .status(200)
          .json({ success: true, message: "Studnet deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Student not found" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
});

module.exports = router;
