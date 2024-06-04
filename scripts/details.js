//create an image, a couple of buttons and append them to the exit in order to show them on the screen
function buildMovie(id, source, alternative){
    let movieElement = document.createElement('img');
    movieElement.setAttribute("class", "video-cards");
    movieElement.setAttribute("id", id);
    movieElement.setAttribute("src", source);
    movieElement.setAttribute("alt", alternative);

    let movieContainerElement = document.getElementById('movie-container');
    movieContainerElement.appendChild(movieElement);

    let addButtonElement = document.getElementById('add-favorites');
    let watchButtonElement = document.getElementById('watch-movie');
    let hideButtonElement = document.getElementById('hide-movie');

    let buttonContainerElement = document.getElementById("button-container");

    buttonContainerElement.appendChild(addButtonElement);
    buttonContainerElement.appendChild(watchButtonElement);
    buttonContainerElement.appendChild(hideButtonElement);

    movieContainerElement.appendChild(buttonContainerElement);
};

let favoriteSection = {
};

document.addEventListener('DOMContentLoaded', function() {
    let params = new URLSearchParams(window.location.search);
    let movieId = params.get('id');

    let movieDescription = document.getElementById('movie-description');
    movieDescription.textContent = 'Details for Movie ID: ' + movieId;

    let movieData = {
        's-bluey': { title: "Bluey", resource:"images/bluey.png", description: "Bluey follows the adventures of a lovable and inexhaustible six-year-old Blue Heeler puppy who lives with her dad, mum and four-year-old little sister, Bingo." },
        'm-luca': { title: "Luca", resource: "images/luca.webp", description: "Luca is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides." },
        's-winnie-pooh': { title: "Winnie-Pooh", resource: "images/winnie-pooh.jpg",  description: " is a good-natured, yellow-furred, honey-loving bear who lives in the Forest surrounding the Hundred Acre Wood " },
        's-gallina-pintadita':{title: "Gallina-pintadita", resource: "images/gallina-pintadita.jpg", description: "It's a music Brasilian serie, which is main target is the yougest kids of the house"}
    };

    let movie = movieData[movieId];
    if (movie) {
        movieDescription.innerHTML = `
            <h2 class="sub-titles">${movie.title}</h2>
            <p class="paragraph-description">${movie.description}</p>
        `;
        console.log(`movie Id: ${movieId}`);
        buildMovie(movieId, movie.resource, movie.title);
    } else {
        movieDescription.textContent = 'Movie not found!';
    }

    let addButton = document.getElementById("add-favorites");
    addButton.addEventListener('click', function (event) {
        console.log('executing');
        console.log(favoriteSection);
        favoriteSection[movieId] = { movie };
        alert(`Your movie ${event.target.title} was added to Favorites`);
        console.log(favoriteSection);
})
});