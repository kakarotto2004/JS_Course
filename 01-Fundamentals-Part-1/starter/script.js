// let js = "amazing";
// console.log(40 + 2 + 120 * 2);

// console.log("Jones");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

// let PI = 3.1415;

// let myFirstJob = "Proframmer";
// let mySecondJob = "Teacher";

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "23");


// CHALLENGE #1
// let massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;
// let BMIMark = massMark / (heightMark * heightMark), BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// const firstName = "Jakub";
// const job = "IT technician";
// const birthYear = 2001;
// const currentYear = 2023;

// const aboutMe = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;
// console.log(aboutMe);

// const aboutMeNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}`;
// console.log(aboutMeNew);

// console.log('String with \n\
// multile lines\n\
// example');



// const age = 15;
// const isOldEnaugh = age >= 18;

// if (isOldEnaugh) {
//     console.log("Sarah can start driving license");
// } else {
//     console.log("Sarah can't start driving license. She needs " + (18 - age) + " more years");
// }

// let century;
// const birthYear = 2001;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);



// CHALLENGE #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}