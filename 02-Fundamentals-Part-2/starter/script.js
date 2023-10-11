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