// Created global variables for the array of cities

var arrayOfCities = [];
var previousCities = document.querySelector('#recent-searches');

// saveSearch will retrieve the saved city from local storage, create a button, and display it below the search bar

var saveSearch = function () {
    var LocalStorageRetrieve = JSON.parse(localStorage.getItem('city'));

    if (LocalStorageRetrieve) {
        previousCities.textContent = ''
        for (let i = 0; i < LocalStorageRetrieve.length; i++) {
            var makeButton = buttonCreation(LocalStorageRetrieve[i].city);

            // Added styling to the buttons using bootstrap

            makeButton.setAttribute('class', 'btn btn-secondary m-2 city-button')
            previousCities.appendChild(makeButton);
        }
    } else {
        previousCities.innerHTML = "Your recent searches will show here!"
    }
};