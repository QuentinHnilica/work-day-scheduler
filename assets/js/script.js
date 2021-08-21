var currDay = document.querySelector("#currentDay")
var todaysDate = moment().format("MM/DD/YYYY");
var startTime = new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds();


currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + startTime

var timeUpdate = setInterval(() => {
    
    var dt = new Date();
    var times = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + times
}, 1000);
