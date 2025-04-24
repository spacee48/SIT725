const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
}, { collection: "card_details" });

module.exports = mongoose.model("Card", cardSchema);
