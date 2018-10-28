// DOM Elements
const form = document.querySelector('form');
const input = document.querySelector('input');

// API access key and other infos
const accesskey = "e525d80f22c1687000675120f2b6e4847213d2678cc9bc38ea7881a98e73c1f4";
const API_URL = "https://api.unsplash.com/search/photos?query=";


// Images Elements
const imageSection = document.querySelector('.imageSection');


// Listening to the submit event on form element
form.addEventListener('submit', formSubmitted);


function formSubmitted (event) {
    // prevent default
    event.preventDefault();

    // Grabbing the search Term
    const searchTerm = input.value;

    // search function
    // Will return Promise which have( an Array with 10 objects inside)
    search(searchTerm)
        .then(displayImages)

}

function search (searchTerm) {

    const url = `${API_URL}${searchTerm}&client_id=${accesskey}`

    return fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.results)
            return result.results
        });
}


// displayImages

function displayImages (images) {

    imageSection.innerText = '';
    // Looping through images
    images.forEach( image => {
        const imageElement = document.createElement('img');
        // Addding the image url to img tag
        imageElement.src = image.urls.small;
        imageSection.appendChild(imageElement);
    });
}