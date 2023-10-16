// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const xyzw = 213;
// console.log();
// console.log("s");

// console.log("Example text");

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const temperatures = [3, -2, -6, -1, "error", 9, 23, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperatures2 = [2, 2, -8, -2, "error", 6, 13, 27, 19, 21, 13, 8];

const calcTempAmplitudeNew = function (temps1, temps2) {
    const tempsConcat = temps1.concat(temps2);
    let max = tempsConcat[0];
    let min = tempsConcat[0];
    // console.log(tempsConcat);

    for (let i = 0; i < tempsConcat.length; i++) {
        const curTemp = tempsConcat[i];

        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",

        // change to number
        // value: Number(prompt("Degrees celsius:")),
        value: 10,
    };

    console.log(measurement.value);
    console.table(measurement);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (temps1, temps2) {
    const tempsConcat = temps1.concat(temps2);
    let max = tempsConcat[0];
    // let min = tempsConcat[0];
    let min = 0; // bug
    // console.log(tempsConcat);

    for (let i = 0; i < tempsConcat.length; i++) {
        const curTemp = tempsConcat[i];

        if (typeof curTemp !== "number") continue;

        // debugger;    // opens debugger in browser
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
*/

/////////////////////////////////////////////////
// CHALLENGE #1
const temps = [17, 21, 23];

const printForecast = function (arr) {
    let outputString = "";
    for (let i = 0; i < arr.length; i++) {
        outputString += "... " + arr[i] + "^C in " + (i + 1) + " days ...";
    }

    return outputString;
};

console.log(printForecast(temps));
