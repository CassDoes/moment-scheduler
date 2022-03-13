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
  //attempting to display time from script file instead of index file but the format isn't the same as the others
  //leaving this as-is to play with at a later date and don't want to forget the code!
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
//--experimenting with different ways to set timeblocks to see if that makes the timeEl() work but no success so far
hour9 = 9;
hour10 = 10;
hour11 = 11;
hour12 = 12;
hour13 = 13;
hour14 = 14;
hour15 = 15;
hour16 = 16;
hour17 = 17;


//redundant but can't figure out how to make my array work so whatevers... This will have to do!
var timeEl = function() {
  let getTime = moment().format("H");
  console.log(getTime);

    //checking time on 9am div
    if (hour9 < getTime) {
      $(".h-9").addClass("past");
    }
    else if (hour9 == getTime) {
      $(".h-9").addClass("present");
    } 
    else if (hour9 > getTime) {
      $(".h-9").addClass("future");
    }

    //checking time on 10am div
    if (hour10 < getTime) {
      $(".h-10").addClass("past");
    }
    else if (hour10 == getTime) {
      $(".h-10").addClass("present");
    } 
    else if (hour10 > getTime) {
      $(".h-10").addClass("future");
    }

    //checking time on 11am div
    if (hour11 < getTime) {
      $(".h-11").addClass("past");
    }
    else if (hour11 == getTime) {
      $(".h-11").addClass("present");
    } 
    else if (hour11 > getTime) {
      $(".h-11").addClass("future");
    }

    //checking time on 12pm div
    if (hour12 < getTime) {
      $(".h-12").addClass("past");
    }
    else if (hour12 == getTime) {
      $(".h-12").addClass("present");
    } 
    else if (hour12 > getTime) {
      $(".h-12").addClass("future");
    }

    //checking time on 1pm div
    if (hour13 < getTime) {
      $(".h-13").addClass("past");
    }
    else if (hour13 == getTime) {
      $(".h-13").addClass("present");
    } 
    else if (hour13 > getTime) {
      $(".h-13").addClass("future");
    }

    //checking time on 2pm div
    if (hour14 < getTime) {
      $(".h-14").addClass("past");
    }
    else if (hour14 == getTime) {
      $(".h-14").addClass("present");
    } 
    else if (hour14 > getTime) {
      $(".h-14").addClass("future");
    }

    //checking time on 3pm div
    if (hour15 < getTime) {
      $(".h-15").addClass("past");
    }
    else if (hour15 == getTime) {
      $(".h-15").addClass("present");
      console.log("present");
    } 
    else if (hour15 > getTime) {
      $(".h-15").addClass("future");
    }

    //checking time on 4pm div
    if (hour16 < getTime) {
      $(".h-16").addClass("past");
    }
    else if (hour16 == getTime) {
      $(".h-16").addClass("present");
      console.log("present");
    } 
    else if (hour16 > getTime) {
      $(".h-16").addClass("future");
    }

    //checking time on 5pm div
    if (hour17 < getTime) {
      $(".h-17").addClass("past");
    }
    else if (hour17 == getTime) {
      $(".h-17").addClass("present");
    } 
    else if (hour17 > getTime) {
      $(".h-17").addClass("future");
    }
  }

timeEl();


//let difference = moment(hour, 'ha').diff(moment(getTime, 'ha'), 'hours');