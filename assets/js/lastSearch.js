var getButtonValue = function (value) {
    var buttonValue = value.innerHTML;
    locationCall(buttonValue);
};

//function to create a button. Called multiple times in retrieveLocalStorage based on local storage length
var buttonCreation = function (content) {
    var citybtn = document.createElement('button');
    citybtn.textContent = content;
    //onclick, this function will run that calls another function that grabs the value of the button
    citybtn.onclick = function () { getButtonValue(this); };
    //returns the button
    return citybtn
};