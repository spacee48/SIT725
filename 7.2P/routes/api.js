const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cardController = require("../controllers/cardController");

router.post("/form", userController.submitForm);

router.get("/cards", cardController.getCards);

module.exports = router;
