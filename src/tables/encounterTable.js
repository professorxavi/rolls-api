const encounterTable = [
  {
    min: 1,
    max: 13,
    summary: "No Encounter",
    additionalRolls: [
      { name: "space", table: "spaceTable", die: 6 },
      { name: "illumination", table: "illuminationTable", die: 6 },
    ],
  },
  {
    min: 14,
    max: 15,
    summary: "Terrain",
    additionalRolls: [
      { name: "space", table: "spaceTable", die: 6 },
      { name: "illumination", table: "illuminationTable", die: 6 },
      { name: "terrain", table: "terrainTable", die: 20 },
    ],
  },
  {
    min: 16,
    max: 17,
    summary: "One or more Creatures",
    additionalRolls: [
      { name: "space", table: "spaceTable", die: 6 },
      { name: "illumination", table: "illuminationTable", die: 6 },
      { name: "creature", table: "creatureTable", die: 20 },
    ],
  },
  {
    min: 18,
    max: 20,
    summary: "Terrain Encounter featuring one or more creatures",
    additionalRolls: [
      { name: "space", table: "spaceTable", die: 6 },
      { name: "illumination", table: "illuminationTable", die: 6 },
      { name: "terrain", table: "terrainTable", die: 20 },
      { name: "creature", table: "creatureTable", die: 20 },
    ],
  },
];

export default encounterTable;
