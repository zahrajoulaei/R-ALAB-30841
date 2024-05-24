const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const row = csv.split("\n");


for (i = 0; i < row.length; i++) {
  let cell = row[i].split(",");
  console.log(cell[0], cell[1], cell[2], cell[3]);
}