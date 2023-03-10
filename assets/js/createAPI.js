var APIkey = '629a3c5d9bb017b7d5d0726e3e74cdbb';
var part = 'alerts,minutely';


// // The search bar where the user enters in the city, and 
// it will pass the inpout into the fetch function

var searchBar = function (event) {
    event.preventDefault();
    var selectCity = document.querySelector('#select-city').value.trim();

    if (selectCity === '') {
        alert('Search Field is Blank!');

    } else {

        // This variable selects the city, and will push it into an array using JSON.stringify

        var selectCityObj = { city: selectCity };
        arrayOfCities.push(selectCityObj);
        localStorage.setItem('city', JSON.stringify(arrayOfCities));

        // Putting this function here, will take the city and pass it into a fetch function

        fetchFunction(selectCity)

        // Saves the search and takes the info from local storage and displays it as a clickable button

        saveSearch();
    }
};

// Uses open weather api to fetch city location

var fetchFunction = function (cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {
            var lat = response.coord.lat;
            var lon = response.coord.lon
            callLocation(lat, lon, cityname)
        })

        .catch(err => alert("404 Not Found"))
};

// This function will take the lat lon and display current weather using the openweather api

var callLocation = function (lat, lon, cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}&units=imperial`

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {

            // Will generate the current weather

            currentWeather(response, cityname);

            // This will generate the next 5 day forecast

            fiveDayForecast(response);

        });
};

document.querySelector('#city-search').addEventListener('submit', searchBar)    