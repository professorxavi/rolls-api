const sporeServantsTable = [
  {
    min: 1,
    max: 3,
    summary: "$REPLACE drow spore servants (see appendix C)",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 4,
    max: 6,
    summary: "$REPLACE duergar spore servants (see appendix C)",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 7,
    max: 8,
    summary: "$REPLACE hook horror spore servants (see appendix C)",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 9,
    max: 10,
    summary: "$REPLACE quaggoth spore servants",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 8 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default sporeServantsTable;
