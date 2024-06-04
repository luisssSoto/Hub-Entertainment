//Variables wich allow us to communicate to the DOM
let selectorElement = document.getElementById('mySelector');
let inputElement = document.getElementById('myInput');
let buttonElement = document.getElementById('myButton');
let ulElement = document.getElementById('listOfTitles');

let section = 'movies.json';

// Adding Event Listeners
selectorElement.addEventListener('change', changeSection);
selectorElement.addEventListener('changeMode', modeMessage);

// Restrictions for the user input
inputElement.addEventListener('keydown', checkInput);

// Functionality of "Search" button
buttonElement.addEventListener('click', searchTitle);

//Adding Functions
function changeSection(){
    section = selectorElement.value;
    let event = new CustomEvent('changeMode');
    selectorElement.dispatchEvent(event);

}

function modeMessage(){
    alert(`You've just changed the searching filter for ${selectorElement.value}`);
}

function checkInput(event){
    if((event.keyCode < 65 || event.keyCode > 90) && event.keyCode != 32 && event.keyCode != 8){
        event.preventDefault();
    }
}

function searchTitle(){
    ulElement.innerHTML = "";

    fetch(selectorElement.value)
    .then(response => response.json())
    .then(function(output){
        for(let item of output.data){
            if(item.title.startsWith(inputElement.value.toUpperCase())){
                let paragraphElement = document.createElement('p');
                paragraphElement.id = item.title;
                paragraphElement.innerHTML = item.description;
                paragraphElement.style.display = "none";

                let listElement = document.createElement('li');
                listElement.innerHTML = item.title;
                listElement.addEventListener('mouseover', function(){
                    let paragraphElement = document.getElementById(item.title);
                    paragraphElement.style.display = 'block';
                });
                listElement.addEventListener('mouseout', function(){
                    let paragraphElement = document.getElementById(item.title);
                    paragraphElement.style.display = 'none';
            });
            listElement.appendChild(paragraphElement);
            ulElement.appendChild(listElement);
        }
        }
    })
    .catch(function(error){
        console.log('error:' + error);
    })
}