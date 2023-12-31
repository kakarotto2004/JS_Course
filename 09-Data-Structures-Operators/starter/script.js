'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time,
        address,
    }) {
        console.log(
            `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delecious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

/*
const rest1 = {
    name: 'Carpi',
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYUMOUS>';
// rest2.owner = rest2.owner && '<ANONYUMOUS>';
rest1.owner &&= '<ANONYUMOUS>';
rest2.owner &&= '<ANONYUMOUS>';

console.log(rest1);
console.log(rest2);
*/

// =================================================================

/*
restaurant.numGeusts = 0;
const guests1 = restaurant.numGeusts ? restaurant.numGeusts : 15;
console.log(guests1);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGeusts ?? 10;
console.log(guestCorrect);
*/

// =================================================================
/*
console.log(3 || 'Jakub');
console.log('' || 'Jakub');
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);

console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGeusts = 23;
const guests1 = restaurant.numGeusts ? restaurant.numGeusts : 15;
console.log(guests1);

const guests2 = restaurant.numGeusts || 10;
console.log(guests2);

console.log('-------------------');

console.log(0 && 'Jakub');
console.log(7 && 'Jakub');

console.log('Hello' && 23 && null && 'Jakub');

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'qq');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions');
*/

// =================================================================

// Rest Pattern
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
};

add(2, 3);
add(2, 5, 7, 2);
add(2, 5, 2, 5, 9, 4, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'paprica', 'qq');
restaurant.orderPizza('mushrooms');
*/

// =================================================================

// Spread operator
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Jakub';
const letters = [...str];
console.log(letters);

//

// const ingredients = [
//     prompt('Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, funder: 'Guiseppe', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// =================================================================

// Destructuring objects
/*
restaurant.orderDelivery({
    time: '22:30',
    address: 'Piotrkowska 12',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    time: '22:30',
    address: 'Piotrkowska 12',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

// =================================================================

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring arrays
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCurse] = restaurant.order(2, 0);
console.log(starter, mainCurse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// =================================================================
