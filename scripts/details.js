//create an image, a couple of buttons and append them to the exit in order to show them on the screen
function buildMovie(id, source, alternative) {
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

function loadingDetails(){
    console.log('loadingDetails is running');
    let params = new URLSearchParams(window.location.search);
    console.log(`params ${params}`);
    console.log(`params id: ${params.get('id')}`);
    let movieId = params.get('id');
    let category = "";
    if (movieId.startsWith("s")) {
        category = "series.json"
    }
    else {
        category = "movies.json"
    };

    console.log('Category: ' + category);

    let movieDescription = document.getElementById('movie-description');
    movieDescription.textContent = 'Details for Movie ID: ' + movieId;

    // let movieData = {
    //     's-bluey': { title: "Bluey", resource: "images/bluey.png", description: "Bluey follows the adventures of a lovable and inexhaustible six-year-old Blue Heeler puppy who lives with her dad, mum and four-year-old little sister, Bingo." },
    //     'm-luca': { title: "Luca", resource: "images/luca.webp", description: "Luca is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides." },
    //     's-winnie-pooh': { title: "Winnie-Pooh", resource: "images/winnie-pooh.jpg", description: " is a good-natured, yellow-furred, honey-loving bear who lives in the Forest surrounding the Hundred Acre Wood " }};
    
    console.log(`Category: ${category}`);

    fetch(category).then(response => response.json()).then(function (output) {
        for (let item of output.data) {
            if (movieId == item.id) {
                console.log(item);
                console.log(`Title selected id: ${item.id}`);
                movieDescription.innerHTML = `
            <h2 class="sub-titles">${item.title}</h2>
            <p class="paragraph-description">${item.description}</p>
        `;
                console.log(`movie Id: ${movieId}`);
                buildMovie(movieId, item.resource, item.title);
            } else {
                movieDescription.textContent = 'Movie not found!';
            }
        }
    }).catch(function (error) {
        console.log('error: ', error);
    })

};

// let addButton = document.getElementById("add-favorites");
// addButton.addEventListener('click', function (event) {
//     console.log('executing');
//     console.log(favoriteSection);
//     favoriteSection[movieId] = { movie };
//     alert(`Your movie ${event.target.title} was added to Favorites`);
//     console.log(favoriteSection);
// })
// });