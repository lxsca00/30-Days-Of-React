export const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const ethiopiaIndex = countries.indexOf("Ethiopia");

countries.includes(countries[ethiopiaIndex])
  ? console.log(countries[ethiopiaIndex].toUpperCase())
  : console.log("No existe");

console.log(countries.slice(0, 10));

console.log(countries[(countries.length - 1) / 2]);

if (countries.length % 2 === 0) {
  console.log(countries.slice(0, countries.length / 2));
  console.log(countries.slice(countries.length / 2));
} else {
  console.log(countries.slice(0, countries.length / 2 + 1));
  console.log(countries.slice(countries.length / 2 + 1));
}
