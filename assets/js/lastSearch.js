var btnVal = function (value) {
    var btnValue = value.innerHTML;
    fetchFunction(btnValue);
};

//function to create a button. Called multiple times in retrieveLocalStorage based on local storage length
var buttonCreation = function (content) {
    var currentCityBtn = document.createElement('button');
    currentCityBtn.textContent = content;
    //onclick, this function will run that calls another function that grabs the value of the button
    currentCityBtn.onclick = function () { btnVal(this); };
    //returns the button
    return currentCityBtn
};