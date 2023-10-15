const terrainTable = [
  {
    value: 1,
    summary: "Boneyard",
    description:
      "The characters come upon an eerie cavern littered with countless bones of various creatures. Whether the site is a natural graveyard for some Underdark species or the former lair of a fearsome predator, the characters can potentially gather useful material for crafting among the bones. If any, are present the undead rise up out of the bones and attack when the first characters are halfway across the cavern.",
    additionalRolls: [{ name: "boneyard", table: "boneyardTable", die: 20 }],
  },
  {
    value: 2,
    summary: "Cliff and ladder",
    description:
      "A cliff $REPLACE feet high blocks the party’s passage, but a rolled-up rope ladder is visible at the top. If someone can climb the cliff — requiring a successful DC 15 Strength (Athletics) check — and toss down the ladder, the characters can proceed. Otherwise, they lose a day’s travel finding another route. If the characters remove the ladder once they are at the top, they decrease the drow pursuit level by 1.",
    additionalRolls: [{ name: "cliff-height", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "cliff-height",
        multiplier: 10,
      },
    ],
  },
  {
    value: 3,
    summary: "Crystal clusters",
    description:
      "The adventurers pass through a faerzress-suffused area containing fist-sized chunks of quartz that shed dim light in a 10-foot radius. A sharp blow to one of the crystals, including throwing it so it impacts a hard surface, causes it to burst in a 10-foot-radius flash of blinding light. Any creature within the radius must succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A creature blinded by this effect repeats the Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. The characters can harvest up to twelve of the crystals in total, but taking the time to do so increases the drow pursuit level by 1.",
    additionalRolls: [],
  },
  {
    value: 4,
    summary: "Fungus cavern",
    description:
      "The adventurers stumble upon a cavern filled with fungi and mushrooms of all sizes and types. See “Fungi of the Underdark” and choose some interesting examples.",
    additionalRolls: [],
  },
  {
    value: 5,
    summary: "Gas leak",
    description:
      "The adventurers come upon a cavern with a dangerous natural gas leak. Any member of the party with a passive Wisdom (Perception) score of 14 or higher detects signs of the gas. The characters’ travel pace for the day is slowed by half as they circumvent the area, but there are no ill effects. If the gas goes undetected, each character in the area must make a DC 12 Constitution saving throw, taking $REPLACE1 poison damage on a failed save, or half as much damage on a successful one. Any open flames brought into the area cause the gas to explode. Each creature in the explosion must make a DC 15 Dexterity saving throw, taking $REPLACE2 fire damage on a failed save, or half as much damage on a successful one.",
    additionalRolls: [
      { name: "poison-damage", numberOfDice: 1, die: 10 },
      { name: "fire-damage", numberOfDice: 3, die: 6 },
    ],
    replace: [
      {
        target: "$REPLACE1",
        value: "poison-damage",
      },
      {
        target: "$REPLACE2",
        value: "fire-damage",
      },
    ],
  },
  {
    value: 6,
    summary: "Gorge",
    description:
      "The characters must make a difficult climb down a gorge $REPLACE feet deep and up the other side, or find a way around it. Their travel pace for the day is slowed by half unless they come up with a plan to cross the gorge quickly.",
    additionalRolls: [{ name: "gorge-depth", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "gorge-depth",
        multiplier: 100,
      },
    ],
  },
  {
    value: 7,
    summary: "High ledge",
    description:
      "The characters must walk along an 18-inch-wide ledge that skirts a ravine $REPLACE feet deep. The party’s travel pace for the day is slowed by half, and each character must succeed on a DC 10 Dexterity saving throw to avoid a fall. Precautions such as roping everyone together let each character make the save with advantage. Increase the pursuit level of the drow by 1.",
    additionalRolls: [{ name: "ravine-depth", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "ravine-depth",
        multiplier: 10,
      },
    ],
  },
  {
    value: 8,
    summary: "Horrid sounds",
    description:
      "For hours, the party’s travel is plagued by terrible shrieks, moans, and incoherent gibbering echoing through nearby passages, without any apparent origin. Each character must make a successful DC 11 Wisdom saving throw. On a failed save, the character’s madness level increases by 1.",
    additionalRolls: [],
  },
  {
    value: 9,
    summary: "Lava Swell",
    description:
      "As the party traverses a long and winding corridor, a tremor opens up a lava-filled fissure behind them. Each character must make a DC 10 Dexterity saving throw to avoid the lava swell, taking $REPLACE fire damage on a failed save. Decrease the drow pursuit level by 1.",
    additionalRolls: [{ name: "fire-damage", numberOfDice: 6, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "fire-damage",
      },
    ],
  },
  {
    value: 10,
    summary: "Muck pit",
    description:
      "The adventurers must wade through a broad, 3-foot-deep pit of slimy muck. The muck is difficult terrain and characters have disadvantage on Dexterity saving throws while within it, but their travel pace for the day is slowed by half if they go around it.",
    additionalRolls: [],
  },
  {
    value: 11,
    summary: "Rockfall",
    description:
      "As the adventurers make their way through a long, twisting cavern, a tremor sets off a rockfall. Each party member must attempt three DC 12 Dexterity saving throws, taking $REPLACE1 bludgeoning damage on each failed save. Any incapacitated creature not moved out of the area is buried under rubble, taking an additional $REPLACE2 bludgeoning damage at the end of each of its turns until the creature is dug out or dead. Decrease the drow pursuit level by 1.",
    additionalRolls: [
      { name: "bludgeoning-damage", numberOfDice: 3, die: 6 },
      { name: "incap-blud-damage", numberOfDice: 1, die: 6 },
    ],
    replace: [
      {
        target: "$REPLACE1",
        value: "bludgeoning-damage",
      },
      {
        target: "$REPLACE2",
        value: "incap-blud-damage",
      },
    ],
  },
  {
    value: 12,
    summary: "Rope bridge",
    description:
      "A ravine $REPLACE1 feet wide and $REPLACE2 feet deep cuts across the party’s path, spanned by an old rope bridge. If the characters cut the bridge after they pass, the drow pursuit level decreases by 1.",
    additionalRolls: [
      { name: "ravine-width", numberOfDice: 2, die: 4 },
      { name: "ravine-depth", numberOfDice: 2, die: 4 },
    ],
    replace: [
      {
        target: "$REPLACE1",
        value: "ravine-width",
        multiplier: 10,
      },
      {
        target: "$REPLACE2",
        value: "ravine-depth",
        multiplier: 10,
      },
    ],
  },
  {
    value: 13,
    summary: "Ruins",
    description:
      "The adventurers come across a small ruin hidden in the Underdark. This might be the creation of a subterranean race or a surface ruin that collapsed and sank long ago. If the characters search the ruins, there is a 50 percent chance of them finding $REPLACE trinkets (see chapter 5, “Equipment,” of the Player’s Handbook). Roll on the Trinkets table or choose appropriate ones.",
    additionalRolls: [{ name: "num", numberOfDice: 1, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    value: 14,
    summary: "Shelter",
    description:
      "The party stumbles upon a cave that is sheltered and easily defended. If the characters camp here, they can finish a long rest without any chance of an encounter while they are resting.",
    additionalRolls: [],
  },
  {
    value: 15,
    summary: "Sinkhole",
    description:
      "One random party member steps on and collapses a sinkhole, and must succeed on a DC 12 Dexterity saving throw to avoid falling into a 20-foot-deep pit and taking $REPLACE bludgeoning damage. Climbing out of the pit requires a successful DC 15 Strength (Athletics) check.",
    additionalRolls: [{ name: "bludgeoning-damage", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "bludgeoning-damage",
      },
    ],
  },
  {
    value: 16,
    summary: "Slime or mold",
    description:
      "As the adventurers pass through a small cavern, they encounter a patch of slime or mold. (see “Dungeon Hazards” in chapter 5 of the Dungeon Master’s Guide for details on these threats).",
    additionalRolls: [{ name: "slime-mold", table: "slimeMoldTable", die: 6 }],
  },
  {
    value: 17,
    summary: "Steam vent",
    description:
      "A hot steam vent erupts beneath a random party member, who must succeed on a DC 12 Dexterity saving throw or take $REPLACE fire damage.",
    additionalRolls: [{ name: "bludgeoning-damage", numberOfDice: 2, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "bludgeoning-damage",
      },
    ],
  },
  {
    value: 18,
    summary: "Underground stream",
    description:
      "A waterway $REPLACE feet wide cuts across the party’s path. The stream is shallow and easily crossed, and the characters can drink and refresh their water supplies. Edible fish inhabit the stream, so that the DC of any foraging attempts for food in this area is reduced to 10. Crossing the stream reduces the drow pursuit level by 1.",
    additionalRolls: [{ name: "stream-width", numberOfDice: 2, die: 4 }],
    replace: [
      {
        target: "$REPLACE",
        value: "stream-width",
        multiplier: 5,
      },
    ],
  },
  {
    value: 19,
    summary: "Warning sign",
    description:
      "The characters enter a cavern dotted with stalagmites and stalactites. Those with a passive Wisdom (Perception) score of 11 or higher spot the sigil to the right carved into one of the stalagmites. The sigil is a drow warning sign that means “Demons ahead!” Any non-drow creature that touches the symbol must make a DC 10 Wisdom saving throw. On a failed save, the creature’s madness level increases by 1. If the characters take a long rest within one mile of the warning sign, roll a d20 and consult the table to determine what, if anything, they encounter at the end of their rest.",
    additionalRolls: [
      { name: "warning-sign", table: "warningSignTable", die: 20 },
    ],
  },
  {
    value: 20,
    summary: "Webs",
    description:
      "Sticky webs fills a passage (see “Dungeon Hazards” in chapter 5 of the Dungeon Master’s Guide). The webs extend for hundreds of feet. Unless the characters come up with a plan for clearing the webs quickly, the party’s travel pace for the day is halved as the characters are forced to cut their way through or find an alternate route. Check for an encounter when the party enters the webs.",
    additionalRolls: [{ name: "web", table: "webTable", die: 6 }],
  },
];

export default terrainTable;
