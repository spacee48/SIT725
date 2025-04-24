const User = require('../models/user');

exports.submitForm = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    const io = req.app.get("socketio");
    io.emit("newUser", {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });

    res.status(200).send("User data saved!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to save user data.");
  }
};

