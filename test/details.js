document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var movieId = params.get('id');

    // Aquí puedes hacer una llamada AJAX o fetch para obtener detalles de la película
    // En este ejemplo, simplemente se muestra el ID de la película
    var movieDetails = document.getElementById('movie-details');
    movieDetails.textContent = 'Details for Movie ID: ' + movieId;

    // Ejemplo de datos ficticios
    var movieData = {
        1: { title: "Movie 1", description: "Description of Movie 1" },
        2: { title: "Movie 2", description: "Description of Movie 2" },
        3: { title: "Movie 3", description: "Description of Movie 3" }
    };

    var movie = movieData[movieId];
    if (movie) {
        movieDetails.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;
    } else {
        movieDetails.textContent = 'Movie not found!';
    }
});
