// filter

// Given an array of countries, write a function 
// that returns an array of all Asian countries.

var countries = [
  {
      "countryCode": "AF",
      "countryName": "Afghanistan",
      "population": "29121286",
      "capital": "Kabul",
      "continentName": "Asia"
  },
  {
      "countryCode": "AL",
      "countryName": "Albania",
      "population": "29869520",
      "capital": "Tirana",
      "continentName": "Europe"
  },
  {
      "countryCode": "AO",
      "countryName": "Angola",
      "population": "13068161",
      "capital": "Luanda",
      "continentName": "Africa"
  },
  {
      "countryCode": "AI",
      "countryName": "Anguilla",
      "population": "13254",
      "capital": "The Valley",
      "continentName": "North America"
  },
  {
      "countryCode": "AM",
      "countryName": "Armenia",
      "population": "29680000",
      "capital": "Yerevan",
      "continentName": "Asia"
  },
]

function filterAsianCountries() {
  const asianCountries = countries.filter((country) => {
    return country.continentName === "Asia";
  })
  return asianCountries;
}

console.log('Asian Countries:', filterAsianCountries());

// Given the same list of countries, find all 
// countries with a population greater than 
// 1,500,000

function filterBigCountries() {
  const bigCountries = countries.filter((country) => {
    return country.population > 1500000;
  })
  return bigCountries;
}

console.log('Big Countries:', filterBigCountries());


// .map()

// Given a list of countries, write a function 
// that returns an array of strings with the 
// country code and name

var countries2 = [
  {
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryCode": "AL",
    "countryName": "Albania",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryCode": "DZ",
    "countryName": "Algeria",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
]

function explainCodes() {
  const codeStrings = countries2.map((country) => {
    return `${country.countryCode} stands for ${country.countryName}`;
  })
  return codeStrings;
}

console.log("Code Strings", explainCodes());

// .forEach()

// Given a list of countries, write a function 
// that returns an array of all the country codes

var countries3 = [
  {
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryCode": "AL",
    "countryName": "Albania",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryCode": "DZ",
    "countryName": "Algeria",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
]

function getCodes() {
  const countryCodes = [];
  countries3.forEach((country) => {
    let countryCode = country.countryCode;
    countryCodes.push(countryCode);
  })
  return countryCodes;
}

console.log("Country Codes:", getCodes());

// .reduce

// Given an array of numbers, write a function 
// that returns the product of all the numbers

var numbers = [1,2,5,7]

function getProduct() {
  var product = numbers.reduce((acc, num) => {
    acc *= num;
    return acc;
  }, 1)
  return product;
}

console.log('Product:', getProduct());