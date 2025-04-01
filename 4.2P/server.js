const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/sit725db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to sit725db");
});

const userSchema = new mongoose.Schema({
    first_name: String, 
    last_name: String,
    email: String 
}, { collection: 'users' });

const cardSchema = new mongoose.Schema({
    title: String,
    image: String, 
    link: String, 
    description: String
}, { collection: 'card_details' });

const User = mongoose.model("User", userSchema);
const Card = mongoose.model("Card", cardSchema);

app.post("/api/form", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send("User data saved!");
    } 
    catch (err) {
        console.error(err);

        res.status(500).send("Failed to save user data.");
    }
});

app.get("/api/cards", async (req, res) => {
    try {
        const cards = await Card.find({});

        res.json(cards);
    }
    catch (err) {
        console.error(err);

        res.status(500).send("Failed to fetch cards.");
    }
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
