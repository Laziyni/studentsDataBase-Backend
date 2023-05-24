const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    login: { type: String, unique: true, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "worker", required: true },
    department: {
      type: String,
      required: true,
    },
    jobTitle: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
