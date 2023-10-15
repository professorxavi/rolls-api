const fungiTable = [
  {
    min: 1,
    max: 2,
    summary: "$REPLACE gas spores",
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
    max: 4,
    summary: "$REPLACE shriekers",
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
    summary: "$REPLACE violet fungi",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default fungiTable;
