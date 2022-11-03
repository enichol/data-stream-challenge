const fs = require("fs");

const file = fs.readFile("./Indian_Bay_Ecosystem_Corporation.csv", "utf8", function (err, data) {
  console.log(averageWaterTemp(file));
});

function averageWaterTemp(file) {
  return 'sayonara';
}