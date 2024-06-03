document.addEventListener('DOMContentLoaded', function() {
    var movies = document.querySelectorAll('.movie');
    movies.forEach(function(movie) {
        movie.addEventListener('click', function() {
            var movieId = this.getAttribute('data-id');
            window.location.href = 'details.html?id=' + movieId;
        });
    });
});
