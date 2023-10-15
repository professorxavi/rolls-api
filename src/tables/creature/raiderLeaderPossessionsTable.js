const raiderLeaderPossessionsTable = [
  {
    min: 1,
    max: 5,
    summary: "None",
    additionalRolls: [],
  },
  {
    min: 6,
    max: 10,
    summary: "$REPLACE 10 gp gemstones in a pouch",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 11,
    max: 14,
    summary: "$REPLACE 50 gp gemstones in a pouch",
    additionalRolls: [{ name: "num", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 15,
    max: 17,
    summary: "$REPLACE torchstalks (see “Fungi of the Underdark”)",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 18,
    max: 19,
    summary: "$REPLACE waterorbs (see “Fungi of the Underdark”)",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 20,
    summary:
      "A random magic item (roll on Magic Item Table B in chapter 7 of the Dungeon Master’s Guide)",
    additionalRolls: [],
  },
];

export default raiderLeaderPossessionsTable;
