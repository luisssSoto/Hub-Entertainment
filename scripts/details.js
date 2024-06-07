// function to get the list of movies from localStorage
function getFavoriteMovies() {
    let movies = localStorage.getItem('favoriteMovies');
    //JSON -> object JS
    return movies ? JSON.parse(movies) : [];
};

//function to get the "Continue Watching" section
function getContinueWatchingMovies(){
    let movies = localStorage.getItem('continueWatching');
    return movies ? JSON.parse(movies) : [];
}

// function to save the list of movies to localStorage
function saveFavoriteMovies(movies) {
    //object JS -> JSON
    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
};

//function to save data of the "Continue Watching" section
function saveContinueWatchingMovies(movies){
    localStorage.setItem('continueWatching', JSON.stringify(movies));
}

function addingMovies(id, title, resource, description) {
    let newTitle = { "id": id, "title": title, "resource": resource, "description": description };
    console.log('new title is: ' + newTitle);
}

//create all the content related to the movie/serie according the parameters have gotten
function buildMovie(id, title, resource, description) {
    let titleElement = document.getElementById('title-movie');
    titleElement.textContent = title;

    let descriptionElement = document.getElementById('description-movie');
    descriptionElement.textContent = description

    let imgElement = document.createElement('img');
    imgElement.setAttribute("class", "video-cards");
    imgElement.setAttribute("id", id);
    imgElement.setAttribute("src", resource);
    imgElement.setAttribute("alt", title);

    let movieContainerElement = document.getElementById('movie-container');
    movieContainerElement.appendChild(imgElement);

    let addButtonElement = document.getElementById('add-favorites');
    let watchButtonElement = document.getElementById('watch-movie');
    let hideButtonElement = document.getElementById('hide-movie');

    let buttonContainerElement = document.getElementById("button-container");

    buttonContainerElement.appendChild(addButtonElement);
    buttonContainerElement.appendChild(watchButtonElement);
    buttonContainerElement.appendChild(hideButtonElement);

    movieContainerElement.appendChild(buttonContainerElement);

    // Adding a new title to the Favorite Section
    let newTitle = { "id": id, "title": title, "resource": resource, "description": description };
    
    addButtonElement.addEventListener('click', function () {
        let favoriteMovies = getFavoriteMovies();

        let isInFavoriteSection = favoriteMovies.some(title =>
            title.id === newTitle.id);
        if(!isInFavoriteSection){
            favoriteMovies.push(newTitle);
            saveFavoriteMovies(favoriteMovies);
            alert('Awesome! this movie is now just in your "Favorites" section')
        }
        else{
            alert('Wow! it seems you\'ve already have this title in your "Favorites" section');
        }
    })

    // Hidding a title from the favorite section
    hideButtonElement.addEventListener('click', function(){
        let decision = confirm('If you decide to hide this title won\'t be in the "Favorites" section, only it will be if you directly searh it... Do you want to continue?')
        if (decision){
            console.log('made decision'); 
            let favoriteMovies = getFavoriteMovies();
            favoriteMovies = favoriteMovies.filter(movie => movie.id != newTitle.id)
            saveFavoriteMovies(favoriteMovies);
        }
    })
}

//consume data from .json file according to the category
function loadingDetails() {
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

    fetch(category).then(response => response.json()).then(function (output) {
        for (let item of output.data) {
            if (movieId == item.id) {
                buildMovie(item.id, item.title, item.resource, item.description);
            }
        }
    }).catch(function (error) {
        console.log('error: ', error);
    })
};

let run = loadingDetails();