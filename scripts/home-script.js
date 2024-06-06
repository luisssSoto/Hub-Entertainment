// Setting the url according to the element selected
document.addEventListener('DOMContentLoaded', function () {
    let movies = document.querySelectorAll('.video-cards');
    movies.forEach(function (movie) {
        movie.addEventListener('click', function () {
            let movieId = this.getAttribute('id');
            window.location.href = 'details.html?id=' + movieId;
        });
    });
});

// function to get the list of movies from localStorage
function getFavoriteMovies() {
    let movies = localStorage.getItem('favoriteMovies');
    //JSON -> object JS
    return movies ? JSON.parse(movies) : [];
}

//Show the list of Favorite Section
function displayFavoriteMovies() {
    let favoritesMovieList = document.getElementById('favorites-list'); //ul
    favoritesMovieList.innerHTML = '';
    let favoriteMovies = getFavoriteMovies();

    favoriteMovies.forEach((movie) => {
        let containerImgMovieElement = document.createElement('li');
        containerImgMovieElement.setAttribute('class', "card-box");

        let imgMovieElement = document.createElement('img');
        imgMovieElement.setAttribute("class", "video-cards");
        imgMovieElement.setAttribute("id", movie.id);
        imgMovieElement.setAttribute("src", movie.resource);
        imgMovieElement.setAttribute("alt", movie.title);

        containerImgMovieElement.appendChild(imgMovieElement);
        favoritesMovieList.appendChild(containerImgMovieElement);

        imgMovieElement.addEventListener('click', function(){
            let movieId = this.getAttribute('id');
            window.location.href = 'details.html?id=' + movieId;
        });
    })

    // favoriteMovies.forEach((movie, index) => {
    //     const movieItem = document.createElement('li');
    //     movieItem.textContent = `${movie.title} (Director: ${movie.director}, Año: ${movie.year}) `;

    //     const removeButton = document.createElement('button');
    //     removeButton.textContent = 'Eliminar';
    //     removeButton.onclick = () => removeMovie(index);

    //     movieItem.appendChild(removeButton);
    // });
}

window.onload = displayFavoriteMovies;