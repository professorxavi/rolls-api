import randomNumber from "../utils/randomNumber.js";

export default function rollDice(num, die) {
  let result = 1; // min value
  for (let i = 0; i < num; i++) {
    result = result + randomNumber(die);
  }
  return result;
}
