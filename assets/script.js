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
$("#currentDay").text(currentDate);
// var getCurrentTimeInt = parseInt(currentDate);
// var hourContainer = document.getElementById("container")
// var hourLabel = document.getElementById("dataHour");

// if (hourLabel === getCurrentTimeInt) {
//     hourContainer.attr("class", "present");
// } else if (hourLabel < getCurrentTimeInt) {
//     hourContainer.attr("class", "past");
// } else {
//     hourContainer.attr("class", "future");
// }
var containerEl = $(".container");

function saveLocal(event) {
  var saveBtnEl = $(event.target);
  console.log(saveBtnEl.siblings().val());
}

containerEl.on("click", ".saveBtn", saveLocal);


//event delegation