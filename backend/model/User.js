const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  return obj;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
