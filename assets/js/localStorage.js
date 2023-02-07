// var arrayOfCities = [];
// var previousCities = document.querySelector('#recent-searches');

// // Added an anonymous function to retrieve local storage
// var saveSearch = function () {
//     var getLocalStorage = JSON.parse(localStorage.getItem('city'));

//     if (getLocalStorage) {
//         previousCities.textContent = ''
//         for (let i = 0; i < getLocalStorage.length; i++) {

//             var makeButton = buttonCreation(getLocalStorage[i].city);
//             makeButton.setAttribute('class', 'btn btn-secondary m-2 city-button');
//             previousCities.appendChild(makeButton);
//         }
//     }

//     else {
//         previousCities.innerHTML = "Your recent searches will show here!"
//     }
// };

// var loadLocalStorage = function () {
//     //have to set up if statement or null object will be pushed
//     if (localStorage.getItem('city')) {
//         var LocalStorageRetrieve = JSON.parse(localStorage.getItem('city'));

//         for (let i = 0; i < LocalStorageRetrieve.length; i++) {
//             //creates object to push to array
//             var selectCityObj = {
//                 city: LocalStorageRetrieve[i].city
//             };
            
//             arrayOfCities.push(selectCityObj);
//         }
//         saveSearch();
//         //if nothing in local storage, this text will show
//     } else {
//         previousCities.innerHTML = "Your recent searches will show here!"
//     }
// };

// loadLocalStorage();
// fetchFunction('Seattle');







//array for local storage
var citiesArray = [];
var recentCities = document.querySelector('#recent-searches');

//retrieving from local storage
var saveSearch = function () {
    var LocalStorageRetrieve = JSON.parse(localStorage.getItem('city'));

    if (LocalStorageRetrieve) {
        //clears out old searches to prevent duplicate saving
        recentCities.textContent = ''
        //iterates through local storage and creates buttons
        for (let i = 0; i < LocalStorageRetrieve.length; i++) {
            //calls function to make actual button, passing in argument for text content
            var makeButton = buttonCreation(LocalStorageRetrieve[i].city);
            //sets attribute for styling for button
            makeButton.setAttribute('class', 'btn btn-secondary m-2 city-button')
            //appends to the div
            recentCities.appendChild(makeButton);
        }
        //if there is nothing in local storage, run this
    } else {
        recentCities.innerHTML = "Your recent searches will show here!"
    }
};

// //runs one time if local storage is present so object doesnt keep getting pushed
var loadLocalStorage = function () {
    //have to set up if statement or null object will be pushed
    if (localStorage.getItem('city')) {
        var LocalStorageRetrieve = JSON.parse(localStorage.getItem('city'));

        for (let i = 0; i < LocalStorageRetrieve.length; i++) {
            //creates object to push to array
            var cityCaptureObj = {
                city: LocalStorageRetrieve[i].city
            };
            
            citiesArray.push(cityCaptureObj);
        }
        saveSearch();
        //if nothing in local storage, this text will show
    } else {
        recentCities.innerHTML = "Your recent searches will show here!"
    }
};

loadLocalStorage();
fetchFunction('Seattle');