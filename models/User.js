const mongoose = require("mongoose");
const { Schema } = mongoose; // destructured form of: const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema); // Will create a collection called users and use the userSchema
// will not overwrite users collection if it already exists
