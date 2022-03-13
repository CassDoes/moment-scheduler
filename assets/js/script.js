var todayEl = document.querySelector('#currentDay');
todayEl.innerHTML = moment().format("MMMM Do, YYYY");


document.querySelector(".saveBtn").addEventListener("click", function () {
  var textInput = document.querySelector(".textarea").value ;
  localStorage.setItem("textarea", textInput) ;
});



var hour9 = document.querySelector(".h-9");
  hour9.textContent = moment("9", "h").format("ha");
var hour10 = document.querySelector(".h-10");
var hour11 = document.querySelector(".h-11");
var hour12 = document.querySelector(".h-12");
var hour13 = document.querySelector(".h-13");
var hour14 = document.querySelector(".h-14");
var hour15 = document.querySelector(".h-15");
var hour16 = document.querySelector(".h-16");
var hour17 = document.querySelector(".h-17");

let hourArray = [
  hour9 = moment("9", "h").format("h"),
  hour10 = "10",
  hour11 = 11,
  hour12 = 12,
  hour13 = 13,
  hour14 = 14,
  hour15 = moment("15", "ha").format("ha"),
  hour16 = 16,
  hour17 = 17
];


var timeEl = function() {

  let getTime = moment().format("h");
  console.log(getTime);

  var hourArray = $(".hour");

  for (i = 0; i < hourArray.length; i++) {
    let hour = $(hourArray[i]).attr('id');
    console.log(hour);

    
    if (getTime < hourArray[i]) {
      hourArray.addClass("past");
      console.log("past");
    } 
    else if (getTime === hourArray[i]) {
      $(hourArray[i]).addClass("present");
      console.log("present");
    } 
    else {
      $(hourArray[i]).addClass("future");
      console.log("future");
    }
  }
}

timeEl();

//let difference = moment(hour, 'ha').diff(moment(getTime, 'ha'), 'hours');