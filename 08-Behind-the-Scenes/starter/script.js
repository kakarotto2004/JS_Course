'use strict';

/*
function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you are a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        console.log(millenial);
        // add(2, 3);
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = 'Jakub';
calcAge(1991);
*/

// ====================================================================

/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jakub';
let job = 'teacher';
const year = 2001;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

// ----------------

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// ----------------

var x = 1;
let y = 1;
const z = 1;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// ====================================================================

// ---------- THIS keyword ----------
/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this);
};
calcAge(2001);

const calcAgeArrow = (birthYear) => {
    console.log(2023 - birthYear);
    console.log(this);
};
calcAgeArrow(2001);

const jakub = {
    year: 2001,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
    },
};
jakub.calcAge();

const matila = {
    year: 2017,
};
matila.calcAge = jakub.calcAge;
matila.calcAge();

const f = jakub.calcAge;
f();
*/

// ====================================================================
/*
// var firstName = 'Matila';

const jakub = {
    firstName: 'Jakub',
    year: 2001,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);

        // const isMillenial = function () {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();

        // solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};
jakub.greet();
jakub.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 5, 6);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 4);
*/

// ====================================================================

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
console.log(age);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessisa',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Befeore marriage', jessica);
console.log('After marriage', marriedJessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessisa',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Befeore marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Befeore marriage', jessica2);
console.log('After marriage', jessicaCopy);
