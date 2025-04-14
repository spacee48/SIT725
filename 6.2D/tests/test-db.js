const mongoose = require("mongoose");

const TEST_DB_URI = "mongodb://127.0.0.1:27017/sit725db_test";

const connectTestDB = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(TEST_DB_URI);
    }
};

const disconnectTestDB = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
};

module.exports = {
    connectTestDB,
    disconnectTestDB
};
