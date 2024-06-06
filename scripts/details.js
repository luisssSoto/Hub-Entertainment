//create all the content related to the movie/serie according the parameters got
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

    fetch(category).then(response => response.json()).then(function (output) {
        for (let item of output.data) {
            if (movieId == item.id) {
                buildMovie(movieId, item.resource, item.title, item.description);
            }
        }
    }).catch(function (error) {
        console.log('error: ', error);
    })

};
