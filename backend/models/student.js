const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hasVotedForCongressPerson: {
    default: false,
    type: Boolean,
  },
  hasVotedForFemaleDelagate: {
    default: false,
    type: Boolean,
  },
  hasVotedForMaleDelegate: {
    default: false,
    type: Boolean,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
});

studentSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

studentSchema.set("toJSON", {
  virtuals: true,
});

// creating the model
exports.Student = mongoose.model("Student", studentSchema, "student");
exports.studentSchema = studentSchema;
