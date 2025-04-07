const Movie = require('../models/movieModel');

exports.getMovies = async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
};

exports.addMovie = async (req, res) => {
    const { title, year, image } = req.body;

    if (title && year && image) {
        const newMovie = new Movie({ title, year, image });
        await newMovie.save();
        res.status(201).json(newMovie);
    }
    else {
        res.status(400).json({ error: 'Title, year and image are required' });
    }
};

exports.seedMovies = async (req, res) => {
    const count = await Movie.countDocuments();
    
    if (count === 0) {
      const xmenMovies = [
        { title: "X-Men", year: 2000, image: "../images/x_men.png" },
        { title: "X2: X-Men United", year: 2003, image: "../images/x2.png" },
        { title: "X-Men: The Last Stand", year: 2006, image: "../images/last_strand.png" },
        { title: "X-Men Origins: Wolverine", year: 2009, image: "../images/wolverine.png" },
        { title: "X-Men: First Class", year: 2011, image: "../images/first_class.png" },
        { title: "The Wolverine", year: 2013, image: "../images/wolverine2.png" },
        { title: "X-Men: Days of Future Past", year: 2014, image: "../images/future_past.png" },
        { title: "X-Men: Apocalypse", year: 2016, image: "../images/apocalypse.png" },
        { title: "Logan", year: 2017, image: "../images/logan.png" },
        { title: "Dark Phoenix", year: 2019, image: "../images/phoenix.png" },
        { title: "The New Mutants", year: 2020, image: "../images/mutants.png" }
      ];
      await Movie.insertMany(xmenMovies);
      res.status(201).json({ message: "Movies seeded!" });
    } else {
      res.status(400).json({ message: "Database already seeded." });
    }
  };