var buttonVal = function (value) {
    var buttonValue = value.innerHTML;
    locationCall(buttonValue);
};

//function to create a button. Called multiple times in retrieveLocalStorage based on local storage length
var buttonCreation = function (content) {
    var currentCityBtn = document.createElement('button');
    currentCityBtn.textContent = content;
    //onclick, this function will run that calls another function that grabs the value of the button
    currentCityBtn.onclick = function () { buttonVal(this); };
    //returns the button
    return currentCityBtn
};