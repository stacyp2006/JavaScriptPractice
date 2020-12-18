'use strict';

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const france = describeCountry('France', 20, 'Paris');
// const america = describeCountry('USA', 300, 'Washington, D.C.');
// const italy = describeCountry('Italy', 40, 'Rome');

// console.log(france);
// console.log(america);
// console.log(italy);

// function countLetters(str) {
//     let letters = str.split('')
//     let count = 0;
//     letters.forEach((letter) => {
//         if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//             count += 1
//         } else {
//             count += 2
//         }
//     })
//     console.log(count)
//     return count
// }

// countLetters('abcde')

const worldPop = 7900;
// const population = 300000000;

function percentageOfWorld1(population) {
  return (population / worldPop) * 100;
}

// const americaPercentage = percentageOfWorld1(300000000);
// const francePercentage = percentageOfWorld1(100000000);
// const ukPercentage = percentageOfWorld1(20000000);

// console.log(americaPercentage)
// console.log(francePercentage)
// console.log(ukPercentage)

// const populations = [1000, 2000, 3000, 4000];
// console.log(populations.length === 4)

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

// let americanNeighbors = ['Mexico', 'Canada'];
// americanNeighbors.push('Utopia');
// americanNeighbors.pop();
// if (!americanNeighbors.includes('Germany')) {
//     console.log('Probably not a central European country')
// };
// let mexicoIndex = americanNeighbors.indexOf('Mexico')
// americanNeighbors[mexicoIndex] = 'Republica Mexicano'
// console.log(americanNeighbors)

// const myCountry = {
//     country: 'France',
//     capital: 'Paris',
//     language: 'French',
//     population: 40000000,
//     neighbors: ['Germany', 'Belgium', 'Spain', 'Italy', 'Switzerland'],
//     describe: function () {
//         return `${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//     }
// }

// console.log(myCountry.describe())
// myCountry.checkIsland();
// console.log(myCountry)

// 1. For each of them,create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)
// 2. Create a'calcBMI'method on each object to calculate the BMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const john = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.weight/this.height ** 2;
//         return this.bmi
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.weight/this.height ** 2;
//         return this.bmi
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)

// function arrayMaximalAdjacentDifference(nums) {
//     let differences = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         let diff = Math.abs(nums[i] - nums[i + 1])
//         differences.push(diff)
//     }
//     let sortedArr = differences.sort((a, b) => a - b)
//     console.log(sortedArr)
//     return (sortedArr[sortedArr.length - 1])
// }

// console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]))
