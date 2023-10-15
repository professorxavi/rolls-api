import fs from "fs";

import getTravelEncounter from "./travelEncounter.js";
import getCampEncounter from "./campEncounter.js";

const encounterTotal = process.argv.slice(2);

let encounters = [];
for (let i = 0; i < encounterTotal; i++) {
  let travelEncounter = getTravelEncounter();
  let campEncounter = getCampEncounter();
  encounters.push({ day: i + 1, travel: travelEncounter, camp: campEncounter });
}

const content = JSON.stringify({
  encounters: encounters,
});
fs.writeFileSync("../output/encounters.json", content);
