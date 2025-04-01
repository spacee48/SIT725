const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sit725db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cardSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
}, { collection: 'card_details' }); 

const Card = mongoose.model("Card", cardSchema);

const cardData = [
  {
    title: "Galaxy S25 Ultra",
    image: "images/s25.png",
    link: "Learn more about Galaxy S25 Ultra",
    description: "The latest Galaxy series."
  },
  {
    title: "Galaxy Z Fold6",
    image: "images/fold6.png",
    link: "Learn more about Galaxy Z Fold6",
    description: "The latest Fold series."
  },
  {
    title: "Galaxy Z Flip6",
    image: "images/flip6.png",
    link: "Learn more about Galaxy Z Flip6",
    description: "The latest Flip series."
  }
];

Card.insertMany(cardData)
  .then(() => {
    console.log("Card data seeded successfully to 'card_details'");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    mongoose.connection.close();
  });
