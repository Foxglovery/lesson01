"use strict";
let stringArr = ['one', 'hey', 'Gabe'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('Ixion');
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift('Jim');
console.log(guitars);
let test = [];
let bands = [];
bands.push('Pixies');
//Tuple is more strict than array
let myTuple = ['Gabe', 36, true];
let mixed = ['john', 2, false];
myTuple[1] = 43;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "Frogwash"],
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "III"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello';
};
console.log(greetGuitarist(evh));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
