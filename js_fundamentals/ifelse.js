// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
function greaterNum(a, b) {
  return a > b ? a : b;
}
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
console.log("The greater number of 5 and 10 is " + greaterNum(5, 10) + ".");
console.log("The greater number of 51.325 and 10 is " + greaterNum(51.325, 10) + ".");
console.log("The greater number of 4 and -7 is " + greaterNum(4, -7) + ".");
// EXERCISE: The World Translator

// Write a function named helloWorld that:
var helloWorldTranslations = {
  "en" : "Hello, World.",
  "da" : "Hej, Verden.",
  "fr" : "Salut, Monde.",
  "es" : "Hola, Mundo."
}
function helloWorld(lang) {
  return helloWorldTranslations.hasOwnProperty(lang) ? helloWorldTranslations[lang] : helloWorldTranslations["en"];
}
function printHellos(arr) {
  arr.forEach(function(elem) {
    console.log(elem + ": " + helloWorld(elem));
  });
}
printHellos(["en", "da", "fr", "es", "de"]);
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
var gradeBottoms = [90,  75,  60,  50,  0];
var letterGrades = ["A", "B", "C", "D", "F"];
function assignGrade(n) {
  var index = 0;
  for(index = 0; n < gradeBottoms[index]; index++);
  return letterGrades[index];
}
for (var i = 0; i < 100; i += 4) {
  console.log("A grade of " + i + "% is " + assignGrade(i) + ".");
}
// EXERCISE: The Pluralizer

// Write a function named pluralize that:

var specialCases = {
  "goose": "geese",
  "deer": "deer",
  "sheep": "sheep"
}
function pluralize(noun, number) {
  plural = number + " ";
  if (number === 1) {
    plural += noun;
  } else if (specialCases.hasOwnProperty(noun)) {
    plural += specialCases[noun];
  } else if (noun.slice(noun.length - 3, noun.length) === "mum") {
    plural += noun.slice(0, noun.length - 2) + "a";
  } else if (noun.slice(noun.length - 3, noun.length) === "pus") {
    plural += noun.slice(0, noun.length - 2) + "i";
  } else if (noun.slice(noun.length - 1, noun.length) === "s") {
    plural += noun.slice(0, noun.length) + "es";
  } else if (noun.slice(noun.length - 2, noun.length) === "ex" || noun.slice(noun.length - 2, noun.length) === "ix") {
    plural += noun.slice(0, noun.length -2) + "ices";
  } else if (noun.slice(noun.length - 1, noun.length) === "x") {
    plural += noun + "en";
  } else {
    plural += noun + "s";
  }
  return plural;
}
function printPlurals(arr) {
  arr.forEach(function(elem) {
    console.log(pluralize(elem, 1) + ": " + pluralize(elem, 4));
  });
}
printPlurals(["ox", "box", "matrix", "vertex", "vortex", "sheep", "deer", "house", "maximum", "minimum", "octopus", "platypus", "goose", "bonus", "torus"]);
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".




