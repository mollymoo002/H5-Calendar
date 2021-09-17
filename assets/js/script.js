var currentDate = moment().format("MMM Do YYYY H:mm");
$("#currentDay").text(currentDate);
var containerEl = $(".container");
var calHourEl = parseInt(document.querySelector("id"));

// changes the text area of the time to past is beige, present is red, and future is green
function changeColor() {
  // .text-box sets the location for "this", ".each" allows function to run through each container
  $(".text-box").each(function () {
      var todayInTime = moment().format("H")
      // parseInt turns the text box into a number 
      var hour = parseInt($(this).attr("id"))
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

// this allows the user to keep their text in the fields even when they refresh the page
function keepDisplay() {
  for (i = 9; i < 18; i++) {
    localStorage.getItem(i);
    console.log(localStorage.getItem(i));
    $("#" + i).val(localStorage.getItem(i));
  }
}
keepDisplay();


//when the save button is clicked, the saveLocal function runs which saves the input into local storage
containerEl.on("click", ".saveBtn", saveLocal);