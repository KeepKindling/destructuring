/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27]
// let jhon = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [jhon, mary, joe] = ages;

console.log(jhon, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["English", "French", "Spanish", "German", "Japanese"];
let [jhonNative, jhonSecondary] = languages;


// Using rest parameter syntax
