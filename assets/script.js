/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
var currentDate = moment().format("MMM Do YYYY hh:mm");
var currentHour = moment().format("hh");
$("#currentDay").text(currentDate);

var containerEl = $(".container");

function saveLocal(event) {
  event.preventDefault();
  var saveBtnEl = $(event.target);
  var userInput = saveBtnEl.siblings("textarea").val();
  var numId = saveBtnEl.siblings("textarea").attr("data-hour");
  console.log(numId);
  localStorage.setItem(numId, userInput);
  console.log(userInput);
}

function keepDisplay() {
  for (i = 9; i < 18; i++) {
    localStorage.getItem(i);
    $("#" + i).val(localStorage.getItem(i));
  }
}
keepDisplay();



containerEl.on("click", ".saveBtn", saveLocal);


//event delegation