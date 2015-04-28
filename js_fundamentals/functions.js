// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(children, partner, place, job) {
  console.log("You will be a " + job + " in " + place + ", marry " + partner + " with " + children + " kids.");
}
// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birth, current) {
  today = new Date()
  current = Number.isInteger(current) ? current : today.getFullYear();
  yearsElapsed = current - birth;
  console.log("you are either " + (yearsElapsed - 1) + " or " + yearsElapsed + " years old.");
}
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
var maxAge = 80;
function calculateSupply(age, perDay) {
  years = maxAge - age;
  days = years * 365.24
  console.log("You will need " + Math.round(days * perDay) + " to last you until the ripe old age of " + maxAge + ".");
}
// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
var tau = 2 * Math.PI
function calcCircumference(r) {
  console.log("The circumference is " + (r * tau) + ".");
}
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
function calcArea(r) {
  area = r * r * tau / 2;
  console.log("the area is " + area + ".");
}
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
function celsiusToFahrenheit(c) {
  var f = c * 9 / 5 + 32;
  console.log(c + "°C is " + f + "°F.");
}
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
function fahrenheitToCelsius(f) {
  var c = (f - 32) * 5 / 9;
  console.log(f + "°F is " + c + "°C.");
}
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


tellFortune(5, "spongebob", "rock bottom", "fry cook");
tellFortune(0, "no one", "detroit", "beggar");
tellFortune(3, "Robert Baratheon", "King's Landing", "Queen");
calculateAge(1992, 2015);
calculateAge(1992);
calculateAge(1974);
calculateAge(1989);
calculateSupply(29, 3);
calculateSupply(79, 10);
calculateSupply(42, 99.3);
calcCircumference(5);
calcCircumference(15);
calcCircumference(37.5);
calcArea(5);
calcArea(1);
calcArea(0.25);
fahrenheitToCelsius(-40);
celsiusToFahrenheit(-40);
fahrenheitToCelsius(32);
celsiusToFahrenheit(0);
fahrenheitToCelsius(212);
celsiusToFahrenheit(100);
