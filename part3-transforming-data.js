// While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
// In order to make it more obvious what the data is, we will transform our rows into objects.
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
// For instance, the results of the example data above being passed through this step are as follows:
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
// becomes
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
// Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csv.split("\n");
const cells = rows.map((row) => row.split(","));

let numberOfCols = cells[0].length;

//final array made from the csv
const finalArray = cells.map((cell) => cell.slice(0, numberOfCols));

//seperate header from the array
const datawithoutHeader = finalArray.slice(1);

//separate heade and make it lowercase
let header = finalArray[0];
const lowercaseHeader = header.map((item) => item.toLocaleLowerCase());


//make a final object that convert aray to object
const finalObject = datawithoutHeader.map((row) => {
  let obj = {};
  lowercaseHeader.forEach((key, value) => {
    obj[key] = row[value];
  });
  return obj;
});
console.log(finalObject);
