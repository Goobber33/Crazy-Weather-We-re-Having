var generateImage = function (WeatherConditions) {
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