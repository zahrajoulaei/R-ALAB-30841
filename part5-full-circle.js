// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!

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

// const convertToArray = finalObject.map((obj)=>{

//     return lowercaseHeader.forEach((key,value)=> {
// array[key]= row[value]
//     })

// })

// let secondHeader =finalArrayConvertedBack[0];

// header = upperCaseHeader;

const finalArrayConvertedBack = [lowercaseHeader]; // Start with the headers

finalObject.forEach((obj) => {
  const row = lowercaseHeader.map((key) => obj[key]);
  finalArrayConvertedBack.push(row);
});
console.log(finalArrayConvertedBack);

// let secondHeader =finalArrayConvertedBack[0];
//  const upperCaseHeader = secondHeader.map(item=> item.toUpperCase())
//  console.log(upperCaseHeader)

// console.log(convertToArray)
// doesnt Work. the result:
// ]
// [ undefined, undefined, undefined, undefined, undefined ]

// this one alsoe doesnt Work.
// const convertToArray = Array.from(finalObject)
// console.log(convertToArray)
