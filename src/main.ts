let stringArr = ['one', 'hey', 'Gabe']
let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]
stringArr[0] = 'John'
stringArr.push('Ixion')
console.log(stringArr)


guitars[0] = 1984
guitars.unshift('Jim')
console.log(guitars)

let test = []
let bands: string[] = []
bands.push('Pixies')

//Tuple is more strict than array
let myTuple: [string, number, boolean] = ['Gabe', 36, true]

let mixed = ['john', 2, false]

myTuple[1] = 43

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)

interface Guitarist {
    name?: string,
    active: Boolean,
    albums: (string | number)[],
};

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "Frogwash"],
};
let JP: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "III"],
};

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {

        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello'
}
console.log(greetGuitarist(evh))

//Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)