const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    addedBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Student",
    },
    fullname: {
      type: String,
      required: true,
    },
    gender: { type: String, required: true },
    department: {
      type: String,
    },
    faculty: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    course: {
      type: Number,
      required: true,
    },
    group: {
      type: Number,
      required: true,
    },
    educationForm: {
      type: String,
      required: true,
    },
    educationType: {
      type: String,
      required: true,
    },
    educationLevel: {
      type: String,
      required: true,
    },
    status: { type: String, required: true },
    relocation: {
      from: { type: String, default: null },
      to: { type: String, default: null },
    },
    changeDate: {
      type: String,
      required: true,
    },
    details: { type: String },
  },

  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
