// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
function evenOrOdd(n) {
  return n % 2 == 0 ? "even" : "odd";
}
for (var i = 0; i < 20; i++) {
  console.log(i + " is " + evenOrOdd(i) + ".");
}
for (var i = 1; i <= 10; i++) {
  var line = "";
  for (var j = 1; j <= 10; j++) {
    line += i * j;
    while (line.length % 4 !== 0) {
      line += ' ';
    }
  }
  console.log(line);
}
var gradeBottoms = [95,   87,   80,   77,   73,   70,   67,   63,   60,   57,   53,   50,   0]
var letterGrades = ["A+", "A",  "A-", "B+", "B",  "B-", "C+", "C",  "C-", "D+", "D",  "D-", "R"]
function assignGrade(n) {
  var index = 0;
  for(index = 0; n < gradeBottoms[index]; index++);
  return letterGrades[index];
}
for (var i = 0; i < 100; i += 4) {
  console.log("A grade of " + i + "% is " + assignGrade(i) + ".");
}
/*
A+  95% - 100%
A 87% - 94%
A-  80% - 86%
B+  77% - 79%
B 73% - 76%
B-  70% - 72%
C+  67% - 69%
C 63% - 66%
C-  60% - 62%
D+  57% - 59%
D 53% - 56%
D-  50% - 52%
R 0% - 49%
*/
