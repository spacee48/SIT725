const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String
}, { collection: "users", 
    strict: true
 });
  
module.exports = mongoose.model("User", userSchema);