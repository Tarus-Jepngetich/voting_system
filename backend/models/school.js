const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
  schoolId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

schoolSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

schoolSchema.set("toJSON", {
  virtuals: true,
});

// creating the model
exports.School = mongoose.model("School", schoolSchema, "school");
