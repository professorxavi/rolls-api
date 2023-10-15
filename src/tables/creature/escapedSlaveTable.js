const escapedSlaveTable = [
  {
    value: 1,
    summary: "$REPLACE moon elf commoners",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 2 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 2,
    summary: "$REPLACE shield dwarf commoners",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 3 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 3,
    summary: "$REPLACE human commoners",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 4,
    summary: "$REPLACE goblins",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default escapedSlaveTable;
