import getTravelEncounter from "./travelEncounter.js";
import getCampEncounter from "./campEncounter.js";

export default function getEncounters(encounterTotal) {
  let encounters = [];
  for (let i = 0; i < encounterTotal; i++) {
    let travelEncounter = getTravelEncounter();
    let campEncounter = getCampEncounter();
    encounters.push({
      day: 1 + i,
      travel: travelEncounter,
      camp: campEncounter,
    });
  }
  return encounters;
}
