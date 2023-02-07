// This function generates the current weather and displays it at the top of the page

var currentWeather = function (weather, cityname) {
    var live = weather.current;
    var headEl = document.querySelector('#location');
    headEl.textContent = cityname + " " + formatTime();

    // Weather variables

    var temperature = live.temp;
    var windy = live.wind_speed;
    var humidity = live.humidity;
    var uvIndex = live.uvi;

    var uvEl = document.createElement('li')
    uvEl.textContent = `UV Index: ${uvIndex}` 
    var currentConditions = document.querySelector('#conditions')

    currentConditions.innerHTML = `
    <li> Temperature: ${temperature} \u00B0F  </li>
    <li> Wind: ${windy} MPH </li>
    <li> Humidity: ${humidity} %</li>
    `
    currentConditions.appendChild(uvEl)
    checkUVlight(uvIndex, uvEl)
};