// Changes the background color based on how much UV light the area is getting

var checkUVlight = function (uvlight, uvEl) {
    if (uvlight < 3) {
        uvEl.setAttribute('class', 'bg-success')
    } else if (3 < uvlight && uvlight < 6) {
        uvEl.setAttribute('class', 'bg-warning')
    } else {
        uvEl.setAttribute('class', 'bg-danger')
    }
    return uvEl
};

//setup for dates
var date = new Date()
var day = date.getDate()
var month = date.getMonth() + 1;
var year = date.getFullYear();

var formatTime = function () {
    //formats date
    var currentDate = `(${month}/${day}/${year})`
    return currentDate;
};

var formatFuture = function (i) {
    var futureDay = day + i + 1
    var futureDate = `(${month}/${futureDay}/${year})`
    return futureDate;
}