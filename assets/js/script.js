var todayEl = document.querySelector('#currentDay');
        todayEl.innerHTML = moment().format("MMMM Do, YYYY");

var hour9 = document.querySelector(".h-9");
var hour10 = document.querySelector(".h-10");
var hour11 = document.querySelector(".h-11");
var hour12 = document.querySelector(".h-12");
var hour13 = document.querySelector(".h-13");
var hour14 = document.querySelector(".h-14");
var hour15 = document.querySelector(".h-15");
var hour16 = document.querySelector(".h-16");
var hour17 = document.querySelector(".h-17");


let hourArray = [
        hour9 = "9",
        hour10 = "10",
        hour11 = "11",
        hour12 = "12",
        hour13 = "13",
        hour14 = "14",
        hour15 = "15",
        hour16 = "16",
        hour17 = "17"
];

console.log(hourArray);



var timeEl = function() {
        var getTime = moment().format("H");
        for (i = 0; i < hourArray.length; i++) {
                console.log(hourArray[i]);
                console.log(getTime);
        }
                if (getTime === hourArray[i]) {
                       hourArray.addClass("present");
                }
                else if (getTime < hourArray[i]) {
                        hourArray[i].addClass("past");
                }
}

timeEl();



//moment("17", "H").format("H")


