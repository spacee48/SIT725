const User = require('../models/user');

exports.submitForm = async (req, res) => {
  try {
    const allowedFields = ["first_name", "last_name", "email"];
    const inputKeys = Object.keys(req.body);

    const hasUnexpectedFields = inputKeys.some(
      key => !allowedFields.includes(key)
    );

    if (hasUnexpectedFields) {
      return res.status(400).send("Unexpected fields in input.");
    }

    const { first_name, last_name, email } = req.body;

    if (
      typeof first_name !== "string" ||
      typeof last_name !== "string" ||
      typeof email !== "string" ||
      !email.includes("@")
    ) {
      return res.status(400).send("Invalid input data.");
    }

    const user = new User({ first_name, last_name, email });
    await user.save();
    res.status(200).send("User data saved!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to save user data.");
  }
};
