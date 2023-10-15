const raidersTable = [
  {
    min: 1,
    max: 2,
    summary: "$REPLACE human bandits and 1 human bandit captain",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
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
    summary: "$REPLACE goblins and 1 goblin boss",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 4 }],
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
    summary: "$REPLACE orcs and 1 orc Eye of Gruumsh",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
];

export default raidersTable;
