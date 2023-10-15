const ambusherLairDiscoveriesTable = [
  {
    min: 1,
    max: 10,
    summary: "None",
    additionalRolls: [],
  },
  {
    min: 11,
    max: 12,
    summary:
      "A humanoid skeleton or corpse clutching a salvageable, nonmagical weapon (your choice)",
    additionalRolls: [],
  },
  {
    min: 13,
    max: 14,
    summary:
      "A humanoid skeleton or corpse wearing a salvageable suit of nonmagical armor (your choice)",
    additionalRolls: [],
  },
  {
    min: 15,
    max: 17,
    summary: "$REPLACE 50 gp gems",
    additionalRolls: [{ name: "gems", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "gems",
      },
    ],
  },
  {
    min: 18,
    max: 19,
    summary:
      "A humanoid skeleton or corpse carrying a random magic item (roll once on Magic Item Table B in chapter 7 of the Dungeon Master’s Guide)",
    additionalRolls: [],
  },
  {
    value: 20,
    summary: `A monster hoard containing $REPLACE 50 gp gems and one or more random magic items (roll 1d4 times on Magic Item Table C in chapter 7 of the Dungeon Master’s Guide)`,
    additionalRolls: [{ name: "gems", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "gems",
      },
    ],
  },
];

export default ambusherLairDiscoveriesTable;
