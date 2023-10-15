import fs from "fs";

// general encounter
import encounterTable from "./encounterTable.js";
import illuminationTable from "./illuminationTable.js";
import spaceTable from "./spaceTable.js";

// terrain
import terrainTable from "./terrain/terrainTable.js";
import boneyardTable from "./terrain/boneyardTable.js";
import slimeMoldTable from "./terrain/slimeMoldTable.js";
import warningSignTable from "./terrain/warningSignTable.js";
import webTable from "./terrain/webTable.js";
// creature
import creatureTable from "./creature/creatureTable.js";
import ambusherTable from "./creature/ambusherTable.js";
import ambusherLairDiscoveriesTable from "./creature/ambusherLairDiscoveriesTable.js";
import escapedSlaveTable from "./creature/escapedSlaveTable.js";
import fungiTable from "./creature/fungiTable.js";
import beholderMemoryTable from "./creature/beholderMemoryTable.js";
import madCreatureTable from "./creature/madCreatureTable.js";
import madCreaturePossessionsTable from "./creature/madCreaturePossessionsTable.js";
import raidersTable from "./creature/raidersTable.js";
import raiderLeaderPossessionsTable from "./creature/raiderLeaderPossessionsTable.js";
import scoutsTable from "./creature/scoutsTable.js";
import societyTable from "./creature/societyTable.js";
import sporeServantsTable from "./creature/sporeServantsTable.js";
import tradersTable from "./creature/tradersTable.js";

const tables = [
  { name: "encounterTable", arr: encounterTable },
  { name: "illuminationTable", arr: illuminationTable },
  { name: "spaceTable", arr: spaceTable },
  { name: "terrainTable", arr: terrainTable },
  { name: "boneyardTable", arr: boneyardTable },
  { name: "slimeMoldTable", arr: slimeMoldTable },
  { name: "warningSignTable", arr: warningSignTable },
  { name: "webTable", arr: webTable },
  { name: "creatureTable", arr: creatureTable },
  { name: "ambusherTable", arr: ambusherTable },
  { name: "ambusherLairDiscoveriesTable", arr: ambusherLairDiscoveriesTable },
  { name: "escapedSlaveTable", arr: escapedSlaveTable },
  { name: "fungiTable", arr: fungiTable },
  { name: "beholderMemoryTable", arr: beholderMemoryTable },
  { name: "madCreatureTable", arr: madCreatureTable },
  { name: "madCreaturePossessionsTable", arr: madCreaturePossessionsTable },
  { name: "raidersTable", arr: raidersTable },
  { name: "raiderLeaderPossessionsTable", arr: raiderLeaderPossessionsTable },
  { name: "scoutsTable", arr: scoutsTable },
  { name: "societyTable", arr: societyTable },
  { name: "sporeServantsTable", arr: sporeServantsTable },
  { name: "tradersTable", arr: tradersTable },
];
const content = {};

for (const table of tables) {
  content[table.name] = table.arr;
}

fs.writeFileSync("./OotA.json", JSON.stringify(content));
