
// API Key from openweather
// Setting the APIkey variable to my api key

var APIkey = '7f173635f9674bf1e43758ba1453b8c0';
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

        citiesArray.push(selectCityObj)
        localStorage.setItem('city', JSON.stringify(citiesArray));

        // Passew the city into a future fetch function

        fetchAPI(selectCity)

        //Calls function after every search to save recent search

        saveSearch();
    }
};