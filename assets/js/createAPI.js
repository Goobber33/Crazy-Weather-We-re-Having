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

        // Selects the city and pushes it to an array

        var selectCityObj = { city: selectCity };
        citiesArray.push(selectCityObj);
        localStorage.setItem('city', JSON.stringify(citiesArray));

        // Passes the city into a future fetch function

        fetchFunction(selectCity)

        //Calls function after every search to save recent search

        saveSearch();
    }
};

//fetch function based off city name
var fetchFunction = function (cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {
            var lat = response.coord.lat;
            var lon = response.coord.lon
            callLocation(lat, lon, cityname)
        })
        //if city they enter is not found
        .catch(err => alert("404 Not Found"))
};

//fetch function based of lat lon and other query parameters. Takes lat lon from locationApiCall()
var callLocation = function (lat, lon, cityname) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}&units=imperial`

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (response) {
            //generates current weather
            currentWeather(response, cityname);
            //generates five day weather
            getFiveDays(response);
        });
};

document.querySelector('#city-search').addEventListener('submit', searchBar)    