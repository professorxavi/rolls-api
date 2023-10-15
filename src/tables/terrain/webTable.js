const webTable = [
  {
    min: 1,
    max: 2,
    summary: "$REPLACE Giant Spiders",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 3,
    max: 6,
    summary: "No Encounter",
    additionalRolls: [],
  },
];

export default webTable;
