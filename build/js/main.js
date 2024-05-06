"use strict";
// // Type Aliases for basic types and functions
// type stringOrNumber = string | number
// convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// angle brackets cant be used in React!!!!!!!!!!!!!!!
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
