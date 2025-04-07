const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/sit725db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
