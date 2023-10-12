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
    age: 2023 - 1990,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
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