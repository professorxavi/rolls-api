const ambusherTable = [
  {
    min: 1,
    max: 2,
    summary: "1 chuul lurking in a pool of water",
    additionalRolls: [],
  },
  {
    value: 3,
    summary: "$REPLACE giant spiders clinging to the walls or ceiling",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 4,
    max: 5,
    summary: "1 grell floating near the high ceiling",
    additionalRolls: [],
  },
  {
    min: 6,
    max: 9,
    summary: "$REPLACE gricks hiding in a crevice or fissure",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 10,
    max: 15,
    summary: "$REPLACE orogs perching on ledges",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 16,
    max: 17,
    summary: "$REPLACE piercers masquerading as stalactites",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 18,
    max: 20,
    summary: "1 umber hulk bursting out of a nearby wall",
    additionalRolls: [],
  },
];

export default ambusherTable;
