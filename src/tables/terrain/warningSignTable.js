const warningSignTable = [
  {
    min: 1,
    max: 14,
    summary: "No Encounter",
    additionalRolls: [],
  },
  {
    min: 15,
    max: 16,
    summary: "1 invisible barlgura",
    additionalRolls: [],
  },
  {
    min: 17,
    max: 18,
    summary: "Dretches",
    additionalRolls: [{ name: "dretch", numberOfDice: 3, die: 4 }],
  },
  {
    min: 19,
    max: 20,
    summary: "Shadow demons",
    additionalRolls: [{ name: "shadow-demons", numberOfDice: 1, die: 2 }],
  },
];

export default warningSignTable;
