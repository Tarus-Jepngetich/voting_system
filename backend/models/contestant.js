const mongoose = require("mongoose");

const contestantSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  votes: {
    type: Number,
    min: 0,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

contestantSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

contestantSchema.set("toJSON", {
  virtuals: true,
});

// creating the model
exports.Contestant = mongoose.model(
  "Contenstant",
  contestantSchema,
  "contestant"
);

exports.contestantSchema = contestantSchema;
