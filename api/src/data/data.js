import { drinksPart1 } from "./drinks.part1.js";
import { drinksPart2 } from "./drinks.part2.js";
import { drinksPart3 } from "./drinks.part3.js";
import { drinksPart4 } from "./drinks.part4.js";

export const drinks = [
  ...drinksPart1,
  ...drinksPart2,
  ...drinksPart3,
  ...drinksPart4
]

export const categories = [...new Set(drinks.map((d) => d.category))];