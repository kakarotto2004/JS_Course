'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/



////////////////////////////////////////////////////////
// FUNCTIONS
/*
function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(2001);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(2000);
console.log(age2);

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1970, "Bob"));
*/


/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/


/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} you should already be on retirement`;
    }

    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jakub'));
console.log(yearsUntilRetirement(1970, 'Tom'));
*/


/*
// CHALLENGE #1
const calcAverage = (time1, time2, time3) => {
    return (time1 + time2 + time3) / 3;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if ((avgKoalas * 2) < avgDolphins) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/



////////////////////////////////////////////
// ARRAYS

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1991, 1984, 2000, 2012);
console.log(year);

console.log(friends[0], year[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Johnas', 'Surname', 2037 - 1991, 'teacher', friends];
console.log(jonas);



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 2000, 1997, 2002, 2017];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// add
friends.push('Tom'); // last
friends.unshift('Jacob'); // first

// remove
const popped = friends.pop(); // last
console.log(popped);
friends.shift(); // first

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Tom'));
console.log(friends.includes('Peter'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend Peter');
}
*/


// CHALLENGE #2
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/



//////////////////////////////////
// OBJECTS
/*
const jonasArray = [
    'Jonas',
    'Blink',
    2023 - 1990,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Blink',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])

// const interestedIn = prompt('What do you want to know about Jonas?');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }


jonas.location = "Poland";
jonas['twitter'] = "@jonasPL";

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);


if (jonas.hasDrivingLicense) {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license`);
} else {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driver's license`);
}

console.log(jonas.getSummary());
*/




// CHALLENGE #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}
*/




//////////////////////////////////
// LOOPS

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}`);
// }

/*
const jonasArray = [
    'Jonas',
    'Blink',
    2023 - 1990,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 2013, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);


// continue and break
console.log('-------- continue --------');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--------- break --------');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

/*
const jonasArray = [
    'Jonas',
    'Blink',
    2023 - 1990,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Repetition ${rep} 💪`);
    }
}
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}
*/


// CHALLENGE #4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));