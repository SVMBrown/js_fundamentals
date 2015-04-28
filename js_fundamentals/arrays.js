// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function ord(n) {
  var str = "";
  switch(n % 10) {
    case 1:
      str = n + "st";
      break;
    case 2:
      str = n + "nd";
      break;
    case 3:
      str = n + "rd";
      break;
    default:
      str = n + "th";
  }
  return str;
}
var colours = ["green", "blue", "brown", "grey", "black", "white", "purple", "yellow", "orange"];
function printChoiceToConsole(element, ranking) {
  console.log(element + " is my " + ord(ranking + 1) + " choice.");
}
colours.forEach(printChoiceToConsole);
