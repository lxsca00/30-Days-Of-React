import { itCompanies } from "./web_techs.js";
import { countries } from "./countries.js";

const arr = [];

const arrNum = [1, 2, 3, 4, 5];

arrNum.length;

arrNum[0], arrNum[2], arrNum[4];

const mixedDataTypes = ["uno", 1, true, [1, 1], null];

mixedDataTypes.length;

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/[,.]/g, "");
text.split(" ").length;

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.includes("Meat")
  ? console.log("Ya incluye")
  : shoppingCart.unshift("Meat");

shoppingCart.includes("Sugar")
  ? console.log("Ya incluye")
  : shoppingCart.push("Sugar");
  
const index = shoppingCart.indexOf("Honey")

shoppingCart.splice(index, 1)

const indexTea = shoppingCart.indexOf("Tea")

shoppingCart[indexTea] = "Green Tea"

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(frontEnd.concat(backEnd))