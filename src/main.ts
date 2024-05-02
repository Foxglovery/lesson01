// Type Aliases for basic types and functions
type stringOrNumber = string | number

type stringOrNumberArray = (stringOrNumber)[]
// type definitions normally go up top !!!
type mathFunction = (a: number, b: number) => number

//for classes and extending those
// interface mathFunction {

//     (a: number, b: number): number
// }


type Guitarist = {
    name?: string,
    active: Boolean,
    albums: stringOrNumberArray,
}

type UserId = stringOrNumber

// Literal Types
let myName: 'Gabe'
//can only be assigned once, like a constant
let userName: 'Gabe' | 'John' | "Amy"
userName = 'Amy'

// functions
const add = (a: number, b: number): number => {
    return a + b
}

//functions that don't have a return
//functions without return should be void type; void declaration can be omitted
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))
logMsg(add(4, 3))

// non arrow function
let subtract = function (c: number, d: number): number {
    return c - d
}



let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

//  optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    //need a type guard to fix the undefined c parameter and unrequired needs to be last
    if (typeof c !== 'undefined') {

        return a + b + c
    }
    return a + b
}
const SumAll = (a: number = 10, b: number, c: number = 2): number => {
    //need a type guard to fix the undefined c parameter and any undefined parameters need to be last

    return a + b + c
}

logMsg(addAll(2, 3, 7))
logMsg(addAll(2, 3))
logMsg(SumAll(2, 3))
// if a is hard coded, must pass in undefined as placeholder for parameter HOWEVER c is fine because it is at the end
logMsg(SumAll(undefined, 3))

