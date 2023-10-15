// import ambusherTable from './ambusherTable.js';
// import ambusherLairDiscoveriesTable from './ambusherLairDiscoveriesTable.js';
// import escapedSlaveTable from './escapedSlaveTable.js';
// import fungiTable from './fungiTable.js';
// import beholderMemoryTable from './beholderMemoryTable.js';
// import madCreatureTable from './madCreatureTable.js';
// import madCreaturePossessionsTable from './madCreaturePossessionsTable.js';
// import raidersTable from './raidersTable.js';
// import raiderLeaderPossessionsTable from './raiderLeaderPossessionsTable.js';
// import scoutsTable from './scoutsTable.js';
// import societyTable from './societyTable.js';
// import sporeServantsTable from './sporeServantsTable.js';
// import tradersTable from './tradersTable.js';

const creatureTable = [
  {
    min: 1,
    max: 2,
    summary: "Ambushers",
    description: `One or more creatures attempt to ambush the party as it makes its way through the Underdark. If the ambush occurs in the monster’s lair, there is a chance that characters searching the area find something of interest or value.`,
    additionalRolls: [
      { name: "ambushers", table: "ambusherTable", die: 20 },
      {
        name: "lair-discoveries",
        table: "ambusherLairDiscoveriesTable",
        die: 20,
      },
    ],
  },
  {
    value: 3,
    summary: "Carrion Crawler",
    description: `The characters encounter a carrion crawler scouring tunnels and caves for food. There is a 25 percent chance that the crawler is domesticated and outfitted with a leather saddle and harness, though there’s no sign of the rider. A character can approach and mount the carrion crawler without being attacked by succeeding on a DC 13 Wisdom (Animal Handling) check. While in the saddle and harness, a rider can remain mounted on the carrion crawler as it crawls across walls and ceilings.`,
    additionalRolls: [],
  },
  {
    min: 4,
    max: 5,
    summary: "Escaped Slaves",
    description:
      "These slaves have been wandering the Underdark since their escape from Gracklstugh or Menzoberranzan. They are scrounging for food and water. Elf, dwarf, and human slaves are friendly; if given food and water they’ll join the party. Goblin slaves are hostile and likely to attack.",
    additionalRolls: [
      { name: "escaped-slaves", table: "escapedSlaveTable", die: 4 },
    ],
  },
  {
    min: 6,
    max: 7,
    summary: "Fungi",
    description:
      "There’s a 25 percent chance that a gas spore carries a memory fragment from a dead beholder in its spores (see the gas spore’s description in the “Fungi” entry of Monster Manual). This memory can be of anything you wish, or you can roll a d4 and consult the Beholder Memories table.",
    additionalRolls: [
      { name: "fungi", table: "fungiTable", die: 6 },
      { name: "beholderMemory", table: "beholderMemoryTable", die: 4 },
    ],
  },
  {
    min: 8,
    max: 9,
    summary: "Giant fire beetles",
    description:
      "The characters encounter $REPLACE giant fire beetles scouring tunnels and caves for food. Characters in need of light sources can harvest the glowing glands of slain beetles.",
    additionalRolls: [{ name: "num", numberOfDice: 3, die: 6 }],
    replace: [
      {
        target: "$REPLACE",
        value: "num",
      },
    ],
  },
  {
    min: 10,
    max: 11,
    summary: "Giant rocktopus",
    description:
      "This creature is a giant octopus that has evolved to live and thrive on land. It can alter its coloration to appear as a rock formation, and it tends to lurk in crevices and fissures, attacking smaller creatures that wander near. It has a walking speed of 20 feet and a climbing speed of 10 feet, loses its Hold Breath feature, and replaces its Underwater Camouflage feature with the following feature: Camouflage. The octopus has advantage on Dexterity (Stealth) checks.",
    additionalRolls: [],
  },
  {
    value: 12,
    summary: "Mad Creature",
    description:
      "The party encounters a creature driven insane by the influence of the demon lords. Roll a d4 and consult the table to determine what appears. Then roll on the Indefinite Madness table in chapter 8 of the Dungeon Master’s Guide to determine the nature of the creature’s madness. If cured of its madness, the creature behaves in accordance with its alignment. There is a chance that the mad creature has something of interest or value in its possession. The creature doesn't part with the item willingly.",
    additionalRolls: [
      { name: "mad-creature", table: "madCreatureTable", die: 4 },
      {
        name: "creature-possessions",
        table: "madCreaturePossessionsTable",
        die: 20,
      },
    ],
  },
  {
    value: 13,
    summary: "Ochre Jelly",
    description:
      "As the characters move through a series of caves, they attract the attention of a ochre jelly. The ooze follows the characters, attacking when they stop to take their next rest. Characters in the back rank of the marching order who have a passive Wisdom (Perception) score of 14 or higher spot the ooze following them.",
    additionalRolls: [],
  },
  {
    min: 14,
    max: 15,
    summary: "Raiders",
    description:
      "This group of raiders from the surface ventured into the Underdark looking for riches and got lost. The raiders are initially hostile toward the party, though clever characters might try bribing them for safe passage or information. There is a chance that the leader of the group has something of interest or value.",
    additionalRolls: [
      { name: "raiders", table: "raidersTable", die: 6 },
      {
        name: "raider-possessions",
        table: "raiderLeaderPossessionsTable",
        die: 20,
      },
    ],
  },
  {
    value: 16,
    summary: "Scouts",
    description:
      "Each of these groups is in the Underdark on a secret mission. The drow scout is searching for escaped slaves. If he spots the party, he’ll attempt to avoid notice and take away information regarding the group’s location (see “Drow Pursuit”). The myconid scouts are indifferent toward the party and unwilling to discuss their mission or their travels with the adventurers. Shield dwarf scouts are friendly if the party includes one or more surface dwellers. They are willing to give the party a day or two’s worth of food and water rations.",
    additionalRolls: [{ name: "scouts", table: "scoutsTable", die: 6 }],
  },
  {
    value: 17,
    summary: "Society of Brilliance",
    description:
      "The characters stumble upon a member of the Society of Brilliance, a sect of highly intelligent monsters that have banded together to solve all of the Underdark’s problems. The society is investigating areas suffused with faerzress to ascertain whether it has something to do with what the society fears is some kind of “demonic incursion.” Every member of the Society of Brilliance has an alignment of neutral, an Intelligence of 18 (+4), and fluency in multiple languages including Dwarvish, Elvish, and Undercommon (although Grazilaxx prefers to communicate using telepathy). Its statistics are unchanged otherwise. Members are erudite and talkative, preferring diplomacy and debate over violence (though they defend themselves if attacked). Each society member can cast the teleport spell once per day, but the intended destination must be within 30 feet of another society member. This teleport effect can be disrupted (see “Faerzress” earlier in the chapter), which is how society members sometimes end up in far corners of the Underdark, separated from their fellows. Members of the Society of Brilliance are aware that paths to the surface world exist but haven’t explored any of them (their concerns are with the Underdark, after all). If the characters seem intent on reaching the surface, a society member might suggest they look for a guide in one of the Underdark’s larger settlements, such as Blingdenstone or Gracklstugh. The society member can provide detailed verbal directions that characters can follow to reach whichever Underdark settlement they desire. However, the society member can’t guarantee that the route is safe. If characters are searching for something else, the society member provides whatever assistance it can.",
    additionalRolls: [{ name: "society-bril", table: "societyTable", die: 10 }],
  },
  {
    value: 18,
    summary: "Spore servants",
    description:
      "One or more creatures killed and reanimated by Zuggtmoy’s spores observe the characters as they pass by. The spore servants don’t communicate and don’t attack except in self-defense.",
    additionalRolls: [
      { name: "spore-servants", table: "sporeServantsTable", die: 10 },
    ],
  },
  {
    min: 19,
    max: 20,
    summary: "Traders",
    description:
      "These traders ply the tunnels of the Underdark, traveling from settlement to settlement. Deep gnome and drow traders have a 50 percent chance of having half their number in giant lizards as mounts and pack animals. Duergar traders have a 50 percent chance of having half their number in male steeders (see appendix C) as pack animals. If there are male steeders present, there is a 50 percent chance that the traders are escorted by a duergar kavalrachni astride a female steeder (see appendix C for both). The traders carry goods worth $REPLACE gp plus ten days of provisions per member of their party; they are willing to sell up to 20 percent of either. If drow traders see the adventurers and have the opportunity to report it, increase the drow pursuit level by 1.",
    additionalRolls: [
      { name: "traders", table: "tradersTable", die: 4 },
      { name: "amount", numberOfDice: 5, die: 4 },
    ],
    replace: [
      {
        target: "$REPLACE",
        value: "amount",
        multiplier: 10,
      },
    ],
  },
];

export default creatureTable;
