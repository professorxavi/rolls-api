const tradersTable = [
  {
    value: 1,
    summary: "$REPLACE deep gnomes",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 2,
    summary: "$REPLACE drow",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 3,
    summary: "$REPLACE duergar",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 4,
    summary: "$REPLACE kuo-toa",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default tradersTable;
