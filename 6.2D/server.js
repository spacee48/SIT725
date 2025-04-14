const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const apiRoutes = require("./routes/api");

mongoose.connect("mongodb://localhost:27017/sit725db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to sit725db"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoutes);

if (require.main === module) {
    app.listen(port, () => {
        console.log("Server running on port", port);
    });
}
  
module.exports = app; 
  
