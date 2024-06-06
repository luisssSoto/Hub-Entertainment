// function to get the list of movies from localStorage
function getFavoriteMovies() {
    let movies = localStorage.getItem('favoriteMovies');
    //JSON -> object JS
    return movies ? JSON.parse(movies) : [];
};

// function to save the list of movies to localStorage
function saveFavoriteMovies(movies) {
    //object JS -> JSON
    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
};

//create all the content related to the movie/serie according the parameters have gotten
function buildMovie(id, source, alternative, description) {
    let titleElement = document.getElementById('title-movie');
    titleElement.textContent = alternative;

    let descriptionElement = document.getElementById('description-movie');
    descriptionElement.textContent = description

    let imgElement = document.createElement('img');
    imgElement.setAttribute("class", "video-cards");
    imgElement.setAttribute("id", id);
    imgElement.setAttribute("src", source);
    imgElement.setAttribute("alt", alternative);

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
};


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

    let addButtonElement = document.getElementById('add-favorites');
    let hideButtonElement = document.getElementById('hide-movie');

    fetch(category).then(response => response.json()).then(function (output) {
        for (let item of output.data) {
            if (movieId == item.id) {
                buildMovie(item.id, item.resource, item.title, item.description);

                // adding a movie to favorite section
                addButtonElement.addEventListener('click', function () {
                    let newTitle = { "id": item.id, "title": item.title, "resource": item.resource, "description": item.description };
                    let favoriteMovies = getFavoriteMovies();
                    favoriteMovies.push(newTitle);
                    saveFavoriteMovies(favoriteMovies);
                    alert(`Your choice was saved in Favorites sections successfully`);
                });
                                
                //hide a movie of all the main menu (home)
                hideButtonElement.addEventListener('click', function(){
                    console.log('hidding...');
                    let categoryList = category;
                    console.log('output ' + output);
                    console.log('data ' + output.data);
                    console.log('item' + item);
                    console.log(item.id);
                    let favoriteMovies = getFavoriteMovies();
                    for (const key in object) {
                        if (Object.hasOwnProperty.call(object, key)) {
                            const element = object[key];
                            
                        }
                    }
                    favoriteMovies.splice(index, 1);
                    saveFavoriteMovies(favoriteMovies);
                    displayFavoriteMovies();
                    // saveFavoriteMovies(favoriteMovies);
                    
                });
                // console.log('This is the index I\'ve been looking forward:' + data.indexOf(item.id));
            }
        }
    }).catch(function (error) {
        console.log('error: ', error);
    })
};
