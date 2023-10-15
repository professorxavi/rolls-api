const scoutsTable = [
  {
    min: 1,
    max: 2,
    summary: "1 drow",
    additionalRolls: [],
  },
  {
    min: 3,
    max: 4,
    summary: "$REPLACE myconid adults",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 5,
    max: 6,
    summary: "$REPLACE shield dwarf scouts",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default scoutsTable;
