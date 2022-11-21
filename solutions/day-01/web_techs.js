export const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  
  console.log(itCompanies);
  
  itCompanies.length;
  
    itCompanies[0],
    itCompanies[(itCompanies.length - 1) / 2],
    itCompanies[itCompanies.length - 1]
  
  itCompanies.forEach((company) => console.log(company));
  
  itCompanies.forEach((company) =>
    "En mayúsculas" + company.toUpperCase()
  );
  
  itCompanies.toString() + "are big IT companies";
  
  itCompanies.includes("Apple") ? "Apple" : "Not found";
  
  for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i].split("").filter((letter) => letter === "o").length > 1
      ? console.log("Más de dos O: ", itCompanies[i])
      : "esto no";
  }
  
  itCompanies.sort();
  
  itCompanies.reverse();
  
  console.log(itCompanies.slice(0, 3));
  
  console.log(itCompanies.slice(itCompanies.length - 3));
  
    itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1);
  
  console.log(itCompanies.shift());
  
  console.log(itCompanies.splice(itCompanies.length / 2 - 1, 1).toString());
  
  itCompanies.pop();
  
  itCompanies.splice(itCompanies.length);
  