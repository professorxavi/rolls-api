import rollDice from "../utils/rollDice.js";
import buildEncounters from "./buildEncounters.js";

export default function getTravelEncounter() {
  const roll = rollDice(1, 20);
  return buildEncounters("encounterTable", 20, roll);
}
