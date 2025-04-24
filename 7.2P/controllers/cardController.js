const Card = require('../models/card');

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch cards.");
  }
};
