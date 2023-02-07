// Created global variables for the array of cities

var arrayOfCities = [];
var previousCities = document.querySelector('#recent-searches');

// saveSearch will retrieve the saved city from local storage, create a button, and display it below the search bar

var saveSearch = function () {
    var getLocalStorage = JSON.parse(localStorage.getItem('city'));

    if (getLocalStorage) {
        previousCities.textContent = ''
        for (let i = 0; i < getLocalStorage.length; i++) {
            var makeButton = buttonCreation(getLocalStorage[i].city);

            // Added styling to the buttons using bootstrap

            makeButton.setAttribute('class', 'btn btn-secondary m-2 city-button')
            previousCities.appendChild(makeButton);
        }
    } else {
        previousCities.innerHTML = "Your recent searches will show here!"
    }
};

// loadStorage runs once if local storage is present so an object wont keep getting pushed

var loadStorage = function () {
    if (localStorage.getItem('city')) {
        var getLocalStorage = JSON.parse(localStorage.getItem('city'));

        for (let i = 0; i < getLocalStorage.length; i++) {
            var cityCaptureObj = {
                city: getLocalStorage[i].city
            };

            arrayOfCities.push(cityCaptureObj);
        }
        saveSearch();

        // Displays text if there is nothing in local storage
        
    } else {
        previousCities.innerHTML = "Your recent searches will show here!"
    }
};

loadStorage();
fetchFunction('Seattle');