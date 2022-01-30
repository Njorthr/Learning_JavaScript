const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach

console.log("*** forEach ***");

companies.forEach(function(company) {
    console.log(company);
});

console.log("*** filter ***");
// filter

// Get 21 or older
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >=21){
//         return true;
//     }
// });

// Full ES6 version
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail") {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === "Retail");

console.log(retailCompanies);

// Filter all the 80s companies

const eightiesCompaines = companies.filter(company => (company.start >= 1980 && 
    company.start < 1990));

console.log(eightiesCompaines);

// get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);

console.log(lastedTenYears);

console.log("*** Map ***");
// map
// create array of company names

const companyNames = companies.map(function(company){
    return company.name;
});

const testMap = companies.map(company => `${company.name} \
[${company.start} - ${company.end}]`);

console.log(companyNames);

console.log(testMap);

// get ages and return square root of em

const ageSquare = ages.map(age => Math.sqrt(age));
const ageTimesTwo = ages.map(age => age * 2);

console.log(ageSquare);
console.log(ageTimesTwo);

// you can use multiple maps
const ageSquaredNDoubled = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(ageSquaredNDoubled);


// sort
console.log("*** sort ***");

// sort the companies by start year

// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));


console.log(sortedCompanies);

// sort ages

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);
// reduce

console.log("*** reduce ***");

// add ages all together

// let ageSum = 0;
// for(let i = 0;i < ages.length;i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age; 
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

// get total years for all companies

const totalYears = companies.reduce((total, company) => total + 
(company.end - company.start), 0);

console.log(totalYears);

// combine methods

console.log("All Together");

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => b - a)
.reduce((a, b) => a + b, 0);

console.log(combined);