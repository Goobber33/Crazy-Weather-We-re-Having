
// API Key from openweather
// Setting the APIkey variable to my api key

var APIkey = 'e7d306eb3b5976488c9d443fcb467e4c';
var alert = 'alerts,minutely';

// The search bar where the user enters in the city, and 
// it will pass the inpout into the fetch function

var searchBar = function (event) {
    event.preventDefault();
    var selectCity = document.querySelector('#select-city').value.trim();

    if (selectCity === '') {
        alert('Search Field is Blank!');

    } else {

        // Selects the city and pushes it to an array

        var selectCityObj = { city: selectCity };

        arrayOfCities.push(selectCityObj)
        localStorage.setItem('city', JSON.stringify(arrayOfCities));

        // Passes the city into a future fetch function

        fetchFunction(selectCity)

        //Calls function after every search to save recent search

        saveSearch();
    }
};

// This is a fetch function that is based off the city name

var fetchFunction = function (cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;
            locationCall(latitude, longitude, cityname)
        })
        .catch(err => alert("404 Not Found"))
};

var locationCall = function (lat, lon, cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}&units=imperial`

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {
            //generates current weather
            generateCurrent(response, cityname);
            //generates five day weather
            getFiveDays(response);
        });
};

document.querySelector('#city-search').addEventListener('submit', searchBar)
