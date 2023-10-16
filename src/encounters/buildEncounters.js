import rollDice from "../utils/rollDice.js";
import findInArray from "../utils/findInArray.js";
import stringReplace from "../utils/stringReplace.js";

import fs from "fs";
const OotA = JSON.parse(fs.readFileSync("./src/tables/OotA.json", "utf8"));

export default function buildEncounters(desiredTable, die, roll) {
  const table = OotA[desiredTable];
  const initialRoll = roll || rollDice(1, die);
  const encounter = findInArray(table, initialRoll);
  const encounterObj = {
    roll: initialRoll,
    summary: encounter.summary,
  };
  if (encounter.description) {
    encounterObj.description = encounter.description;
  }

  if (encounter.additionalRolls.length) {
    for (const additionalRoll of encounter.additionalRolls) {
      const key = additionalRoll.name;
      if (additionalRoll.table) {
        encounterObj[key] = buildEncounters(
          additionalRoll.table,
          additionalRoll.die,
        );
      } else {
        encounterObj[key] = rollDice(
          additionalRoll.numberOfDice,
          additionalRoll.die,
        );
      }
    }
  }

  if (encounter.replace) {
    const { description, summary } = encounterObj;
    let string = description || summary;
    for (const replacement of encounter.replace) {
      const { value, multiplier, target } = replacement;
      if (replacement.multiplier) {
        const total = multiplier * encounterObj[value];
        string = stringReplace(string, target, total);
      } else {
        string = stringReplace(string, target, encounterObj[value]);
      }
    }
    if (description) {
      encounterObj.description = string;
    } else {
      encounterObj.summary = string;
    }
  }
  return encounterObj;
}
