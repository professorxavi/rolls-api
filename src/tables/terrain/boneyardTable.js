const boneyardTable = [
  {
    min: 1,
    max: 14,
    summary: "No Encounter",
    additionalRolls: [],
  },
  {
    min: 15,
    max: 18,
    summary: "$REPLACE Skeletons",
    additionalRolls: [{ name: "num", numberOfDice: 3, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 19,
    max: 20,
    summary: "$REPLACE Minotaur skeletons",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 3 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default boneyardTable;
