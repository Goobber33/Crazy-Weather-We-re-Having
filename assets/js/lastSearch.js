var btnVal = function (value) {
    var btnValue = value.innerHTML;
    fetchFunction(btnValue);
};

// This function creates a button, adds a click function and returns the last searched item.

var buttonCreation = function (content) {
    var currentCityBtn = document.createElement('button');
    currentCityBtn.textContent = content;
    currentCityBtn.onclick = function () { btnVal(this); };
    return currentCityBtn
};