const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    image: String
}, { collection: 'movies' });

module.exports = mongoose.model('Movie', movieSchema);