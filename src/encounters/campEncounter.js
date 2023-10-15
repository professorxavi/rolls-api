import rollDice from "../utils/rollDice.js";
import buildEncounters from "./buildEncounters.js";

export default function getCampEncounter() {
  const roll = rollDice(1, 20);
  const campEncounter = buildEncounters("encounterTable", 20, roll);

  // if terrain encounter add a creature
  if (roll === 14 || roll === 15) {
    const newRoll = rollDice(1, 20);
    campEncounter.creature = buildEncounters("creatureTable", 20, newRoll);
    // remove terrain encounter as well
    campEncounter.summary = "One or more Creatures";
    delete campEncounter.terrain;
  }

  // if creature is an ambush replace it
  if (campEncounter.creature && campEncounter.creature.roll < 3) {
    let replaceAmbush = 0;
    // cover scenario where new roll is an ambush as well
    while (replaceAmbush < 3) {
      replaceAmbush = rollDice(1, 20);
    }
    campEncounter.creature = buildEncounters(
      "creatureTable",
      20,
      replaceAmbush,
    );
  }
  return campEncounter;
}
