// It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// So far, the results should look like this:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

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

// Remove the last element from the sorted array.
finalObject.pop();
// Insert the following object at index 1:
newobj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
finalObject.splice(1, 0, newobj);

// Add the following object to the end of the array:
finalObject.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(finalObject);
