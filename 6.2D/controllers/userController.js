const User = require('../models/user');

exports.submitForm = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("User data saved!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to save user data.");
  }
};
