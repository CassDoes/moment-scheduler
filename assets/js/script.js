//display current time at top of homepage
var todayEl = document.querySelector('#currentDay');
todayEl.innerHTML = moment().format("MMMM Do, YYYY");


//save to local storage for each timeblock
document.getElementById('btn9').addEventListener("click", function () {
  var textInput = document.getElementById("nine").value ;
  localStorage.setItem("textarea1", textInput) ;
});
document.getElementById('btn10').addEventListener("click", function () {
  var textInput = document.getElementById("ten").value ;
  localStorage.setItem("textarea2", textInput) ;
});
document.getElementById('btn11').addEventListener("click", function () {
  var textInput = document.getElementById("eleven").value ;
  localStorage.setItem("textarea3", textInput) ;
});
document.getElementById('btn12').addEventListener("click", function () {
  var textInput = document.getElementById("twelve").value ;
  localStorage.setItem("textarea4", textInput) ;
});
document.getElementById('btn13').addEventListener("click", function () {
  var textInput = document.getElementById("thirteen").value ;
  localStorage.setItem("textarea5", textInput) ;
});
document.getElementById('btn14').addEventListener("click", function () {
  var textInput = document.getElementById("fourteen").value ;
  localStorage.setItem("textarea6", textInput) ;
});
document.getElementById('btn15').addEventListener("click", function () {
  var textInput = document.getElementById("fifteen").value ;
  localStorage.setItem("textarea7", textInput) ;
});
document.getElementById('btn16').addEventListener("click", function () {
  var textInput = document.getElementById("sixteen").value ;
  localStorage.setItem("textarea8", textInput) ;
});
document.getElementById('btn17').addEventListener("click", function () {
  var textInput = document.getElementById("seventeen").value ;
  localStorage.setItem("textarea9", textInput) ;
});


//return local storage for each timeblock after page refresh
$("#nine").val(localStorage.getItem("textarea1"));
$("#ten").val(localStorage.getItem("textarea2"));
$("#eleven").val(localStorage.getItem("textarea3"));
$("#twelve").val(localStorage.getItem("textarea4"));
$("#thirteen").val(localStorage.getItem("textarea5"));
$("#fourteen").val(localStorage.getItem("textarea6"));
$("#fifteen").val(localStorage.getItem("textarea7"));
$("#sixteen").val(localStorage.getItem("textarea8"));
$("#seventeen").val(localStorage.getItem("textarea9"));

//setting DOM element to each timeblock
var hour9 = document.querySelector(".h-9");
  //attempting to display time from JS instead of index file but the format isn't the same as the others
  hour9.textContent = moment("9", "h").format("ha");
var hour10 = document.querySelector(".h-10");
var hour11 = document.querySelector(".h-11");
var hour12 = document.querySelector(".h-12");
var hour13 = document.querySelector(".h-13");
var hour14 = document.querySelector(".h-14");
var hour15 = document.querySelector(".h-15");
var hour16 = document.querySelector(".h-16");
var hour17 = document.querySelector(".h-17");


//timeblock array to set each timeblock to specific time
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


//found current time at page load and attempted to compare with times set in array.
//applied classes (past, present, future) based on comparison without success ("else" statement is the only one working)
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