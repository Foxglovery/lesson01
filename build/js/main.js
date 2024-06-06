"use strict";
// // Type Aliases for basic types and functions
// type stringOrNumber = string | number
Object.defineProperty(exports, "__esModule", { value: true });
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
//Dynamically
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
