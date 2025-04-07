document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const form = document.getElementById('movie-form');
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const imageInput = document.getElementById('image');
    const seedBtn = document.getElementById('seed-btn');
    
    function loadMovies() {
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                movieList.innerHTML = '';
                data.forEach(movie => addMovies(movie));
            });
    }

    function addMovies(movie) {
        const li = document.createElement('li');

        li.className = 'collection-item avatar';

        const img = document.createElement('img');

        img.src = movie.image;
        img.alt = movie.title;
        img.className = 'circle';

        const span = document.createElement('span');

        span.className = 'title';
        span.textContent = movie.title;

        const p = document.createElement('p');

        p.textContent = `Year: ${movie.year}`;

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);

        movieList.appendChild(li);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const year = parseInt(yearInput.value);
        const image = imageInput.value.trim();
    
        if (title && year && image) {
          fetch('/api/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, year, image })
          })
            .then(res => res.json())
            .then(movie => {
              addMovieToDOM(movie);
              form.reset();
            });
        }
    });

    seedBtn.addEventListener('click', () => {
        fetch('/api/movies/seed', { method: 'POST' })
          .then(() => loadMovies());
      });
    
      loadMovies();
    
});