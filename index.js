const fs = require("fs");
const readline = require("readline");

const args = process.argv.slice(2);

const monitoringLocationId = args[0] ? args[0] : "IBS"
const filename = args[1] ? args[1] : "./Indian_Bay_Ecosystem_Corporation.csv"

function parseCSVInput(filename) {
  const stream = fs.createReadStream(filename);
  const reader = readline.createInterface({ input: stream });
  const data = [];
  reader.on("line", row => {
    if (row.includes("Temperature, water")) {
      row = row.split(",");
      if (row[1] === monitoringLocationId && row[20]) {
        data.push(row);
      }
    }
  });
  
  reader.on("close", () => {
    console.log(`found ${data.length} matching entries for ${monitoringLocationId}`)
  const avg = averageWaterTemp(data)
  console.log(`Average water temp (C) for ${monitoringLocationId}: ${avg}`)
  });

  return
}

function averageWaterTemp(data) {
  var sum = 0
  for (const row of data) {
    sum = sum + Number(row[24])
  }
  return sum / data.length
}

parseCSVInput(filename)