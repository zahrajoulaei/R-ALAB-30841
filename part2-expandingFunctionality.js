// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csv.split("\n");
const cells = rows.map((row) => row.split(","));

let numberOfCols = cells[0].length;

const finalArray = cells.map((cell) => cell.slice(0, numberOfCols));
console.log(finalArray);
