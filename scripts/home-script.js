// Setting the url according to the element selected
document.addEventListener('DOMContentLoaded', function() {
    let movies = document.querySelectorAll('.video-cards');
    movies.forEach(function(movie) {
        movie.addEventListener('click', function() {
            let movieId = this.getAttribute('id');
            window.location.href = 'details.html?id=' + movieId;
        });
    });
});
