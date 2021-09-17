/*
GIVEN I am using a daily planner to create a schedule
✅WHEN I open the planner
✅THEN the current day is displayed at the top of the calendar
✅WHEN I scroll down
✅THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
✅WHEN I click into a timeblock
✅THEN I can enter an event
✅WHEN I click the save button for that timeblock
✅THEN the text for that event is saved in local storage
✅WHEN I refresh the page
✅THEN the saved events persist
*/
var currentDate = moment().format("MMM Do YYYY H:mm");
$("#currentDay").text(currentDate);
var containerEl = $(".container");
var calHourEl = parseInt(document.querySelector("id"));

// changes the container of the time to past is beige, present is red, and future is green
function changeColor() {
  // .inputField sets the location for "this", ".each" allows function to run through each container
  $(".text-box").each(function () {
      // "H" format puts time in military hour
      var todayInTime = moment().format("H")
      // "this" refers back to .inputfield, each input has a different id#, parseInt turns it into a number 
      var hour = parseInt($(this).attr("id"))
      // each class is connected to a different color
      if (hour < todayInTime) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
      }
      else if (hour == todayInTime) {
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");
      }
      else {
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
      }
  })
}

changeColor();

// this saves the text input and the time to local storage
function saveLocal(event) {
  event.preventDefault();
  var saveBtnEl = $(event.target);
  var userInput = saveBtnEl.siblings("textarea").val();
  var numId = saveBtnEl.siblings("textarea").attr("data-hour");
  localStorage.setItem(numId, userInput);
}

function keepDisplay() {
  for (i = 9; i < 18; i++) {
    localStorage.getItem(i);
    console.log(localStorage.getItem(i));
    $("#" + i).val(localStorage.getItem(i));
  }
}
keepDisplay();



containerEl.on("click", ".saveBtn", saveLocal);