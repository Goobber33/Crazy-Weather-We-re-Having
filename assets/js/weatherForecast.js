var imageCards = function (WeatherConditions) {
    var WeatherImage = document.createElement('img');
    if (199 < WeatherConditions && WeatherConditions < 233) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/11d@2x.png')
    } else if (299 < WeatherConditions && WeatherConditions < 322) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png')
    } else if (499 < WeatherConditions && WeatherConditions < 532) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png')
    } else if (599 < WeatherConditions && WeatherConditions < 623) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png')
    } else if (700 < WeatherConditions && WeatherConditions < 782) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/50d@2x.png')
    } else if (WeatherConditions == 800) {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png')
    } else {
        WeatherImage.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png')
    }
    return WeatherImage;
};

// fiveDayForecast will generate the next five days in the forecast for the city entered

var fiveDayForecast = function (weather) {

    // This variable will save the array as a variable

    var daily = weather.daily

    // This variable selects the five-day container where the five day forecast will go

    var fiveDay = document.querySelector('#five-day-forecast')

    fiveDay.innerHTML = ''

    // Creates the div card that containt the weather information

    for (let i = 0; i < daily.length - 3; i++) {
        //formating for the next five dates
        var dateHead = formatFuture(i);
        var weather = daily[i].weather[0].id;
        var temp = daily[i].temp.day;
        var wind = daily[i].wind_speed;
        var hummidity = daily[i].humidity;

        var showDay = document.createElement('div');
        var dateHeading = document.createElement('h3');
        var ulEl = document.createElement('ul');
        var tempElLi = document.createElement('li');
        var windLiEl = document.createElement('li');
        var hummidityiLi = document.createElement('li');

        var weatherIcon = imageCards(weather);

        showDay.setAttribute('class', 'card col-auto bg-info m-2 border border-dark');
        dateHeading.setAttribute('class', 'card-text');
        tempElLi.setAttribute('class', 'card-text text-white');
        windLiEl.setAttribute('class', 'card-text text-white');
        hummidityiLi.setAttribute('class', 'card-text text-white');
        weatherIcon.setAttribute('class', 'card-img-top')

        dateHeading.textContent = dateHead;
        tempElLi.textContent = `Temperature: ${temp} \u00B0F`;
        windLiEl.textContent = `Wind: ${wind} MPH`;
        hummidityiLi.textContent = `Humidity: ${hummidity} %`;

        showDay.appendChild(dateHeading);
        showDay.appendChild(weatherIcon);
        showDay.appendChild(ulEl)
        ulEl.appendChild(tempElLi);
        ulEl.appendChild(windLiEl);
        ulEl.appendChild(hummidityiLi);
        fiveDay.appendChild(showDay);
    };
};

