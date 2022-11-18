const arr = [];

const arrNum = [1, 2, 3, 4, 5];

arrNum.length;

arrNum[0], arrNum[2], arrNum[4];

const mixedDataTypes = ["uno", 1, true, [1, 1], null];

mixedDataTypes.length;

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(
  itCompanies[0],
  itCompanies[(itCompanies.length - 1) / 2],
  itCompanies[itCompanies.length - 1]
);

itCompanies.forEach((company) => console.log(company));

itCompanies.forEach((company) =>
  console.log("En mayúsculas", company.toUpperCase())
);

console.log(itCompanies.toString() + "are big IT companies");

itCompanies.includes("Apple") ? console.log("Apple") : console.log("Not found");

for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i].split("").filter((letter) => letter === "o").length > 1
    ? console.log("Más de dos O: ", itCompanies[i])
    : "esto no";
}

itCompanies.sort();

console.log(itCompanies);

itCompanies.reverse();

console.log(itCompanies);

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

console.log(
  itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
);

console.log(itCompanies.shift());

console.log(itCompanies.splice(itCompanies.length / 2 - 1, 1).toString());

console.log(itCompanies.pop());

console.log(itCompanies.splice(itCompanies.length));
