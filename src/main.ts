// // Type Aliases for basic types and functions
// type stringOrNumber = string | number




// type stringOrNumberArray = (stringOrNumber)[]
// // type definitions normally go up top !!!
// type mathFunction = (a: number, b: number) => number

// //for classes and extending those
// // interface mathFunction {

// //     (a: number, b: number): number
// // }


// type Guitarist = {
//     name?: string,
//     active: Boolean,
//     albums: stringOrNumberArray,
// }

// type UserId = stringOrNumber

// // Literal Types
// let myName: 'Gabe'
// //can only be assigned once, like a constant
// let userName: 'Gabe' | 'John' | "Amy"
// userName = 'Amy'

// // functions
// const add = (a: number, b: number): number => {
//     return a + b
// }

// //functions that don't have a return
// //functions without return should be void type; void declaration can be omitted
// const logMsg = (message: any): void => {
//     console.log(message)
// }

// logMsg('Hello!')
// logMsg(add(2, 3))
// logMsg(add(4, 3))

// // non arrow function
// let subtract = function (c: number, d: number): number {
//     return c - d
// }



// let multiply: mathFunction = function (c, d) {
//     return c * d
// }

// logMsg(multiply(2, 2))

// //  optional parameters

// const addAll = (a: number, b: number, c?: number): number => {
//     //need a type guard to fix the undefined c parameter and unrequired needs to be last
//     if (typeof c !== 'undefined') {

//         return a + b + c
//     }
//     return a + b
// }

// // notice the play with default values
// const SumAll = (a: number = 10, b: number, c: number = 2): number => {
//     //need a type guard to fix the undefined c parameter and any undefined parameters need to be last

//     return a + b + c
// }

// logMsg(addAll(2, 3, 7))
// logMsg(addAll(2, 3))
// logMsg(SumAll(2, 3))
// // if a has default value, must pass in undefined as placeholder for parameter HOWEVER c is fine because it is at the end
// logMsg(SumAll(undefined, 3))

// // Rest parameters

// // parameters passed in are not an array but using the rest(spread) operator forms an array which can be manipulated using reduce.
// // The rest operator goes last in the parameters
// //reduce iterates and for each add the running total.
// const total = (a: number, ...nums: number[]): number => {
//     return a + nums.reduce((prev, curr) => prev + curr)
// }

// logMsg(total(10, 2, 3, 4))

// // THE NEVER TYPE

// // type meant for returning errors or loop containing
// const createError = (errorMsg: string) => {
//     throw new Error(errorMsg)
// }

// //custom type guard
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number' ? true : false
// }

// //use of never type
// const numberOrString = (value: number | string):
//     string => {
//     if (typeof value === 'string') return 'string'
//     if (isNumber(value)) return 'number'

//     return createError('this should never happen')
// }

// // CHAPTER 5 TYPE ASSERTION

// type One = string
// type Two = string | number
// type Three = 'hello'

// // convert to more or less specific type

// let a: One = 'hello'
// let b = a as Two // less specific
// let c = a as Three // more specific

// // angle brackets cant be used in React!!!!!!!!!!!!!!!
// let d = <One>'world'
// let e = <string | number>'world'

// const addOrConcat = (a: number, b: number, c: 'add' | 'concat')
//     : number | string => {
//     if (c === 'add') return a + b
//     return '' + a + b
// }

// // use assertion to tell ts we want to return that type
// let myVal: string = addOrConcat(2, 2, 'concat') as string

// // Be careful, TS will allow this but a string is returned.
// let nextVal: number = addOrConcat(2, 2, 'concat') as number

// //Double casting or force casting. It overules TS.
// // 10 as string
// (10 as unknown) as string

// // The DOM
// const img = document.getElementById('#img') as HTMLImageElement
// // using a Bang or non-null assertion will force it
// const myImg = document.querySelector('img') as HTMLImageElement
// const angleBracketImg = <HTMLImageElement>document.querySelector('img')

// img.src
// myImg.src

// class Coder {

//     //this will overide, BE CAREFUL
//     secondLang!: string

//     // name: string
//     // music: string
//     // age: number
//     // lang: string

//     //adding public to the declarations makes them a VISIBILITY MODIFIER
//     // then the above declarations can be DRIED
//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string = 'Typescript'
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
//     // add a method to be able to get private age
//     public getAge() {
//         return `Hello, i'm ${this.age}`
//     }
// }

// const Gabe = new Coder('Gabe', 'Rock', 42)
// console.log(Gabe.getAge())
// //age is private
// // console.log(Gabe.age)

// // EXTENDING THE CLASS
// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//     ) {
//         // feed the super the declarations to make ts okay
//         super(name, music, age)
//         this.computer = computer
//     }
//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }

// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
// console.log(Sara.getLang())
// // console.log(Sara.age)
// // console.log(Sara.lang)
// ///////////////////////////////////////////////////


// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }

// class Guitarist implements Musician {
//     name: string
//     instrument: string

//     constructor(name: string, instrument: string) {
//         this.name = name
//         this.instrument = instrument
//     }

//     play(action: string): string {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const Page = new Guitarist('Jimmy', 'guitar')
// console.log(Page.play('strums'))
// //////////////////////////////////////
// //   STATIC KEYWORD
// class Peeps {
//     // static properties are kept track of directly in the class
//     // not in any one instantiation of the class
//     static count: number = 0

//     static getCount(): number {
//         return Peeps.count
//     }

//     public id: number
//     constructor(public name: string) {
//         this.name = name
//         //the ++ on the right increases first
//         this.id = ++Peeps.count
//     }
// }

// const John = new Peeps('John')
// const Steve = new Peeps('STeve')
// const Amy = new Peeps('Amy')

// console.log(Steve.id)
// console.log(Peeps.count)

// ////////////////////////////////
// // GETTERS AND SETTERS

// class Bands {
//     private dataState: string[]

//     constructor() {
//         this.dataState = []
//     }

//     public get data(): string[] {
//         return this.dataState
//     }

//     public set data(value: string[]) {
//         if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
//             this.dataState = value
//             return
//         } else throw new Error('Param is not an array of strings')
//     }
// }

// const MyBands = new Bands()
// MyBands.data = ['Barty Doyle', 'Patty lupone']
// console.log(MyBands.data)
// MyBands.data = [...MyBands.data, 'Cher']
// console.log(MyBands.data)


// Index Signatures

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// interface TransactionObj {
//     readonly [index: string]: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)

//Dynamically
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

//todaysTransactions.Pizza = 40 its now read only

// console.log(todaysTransactions['Dave'])

//////////////////////////////////
//need to include undefined when one property is optional

//this example shows how to iterate when interface does not have an index signature
interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test)
// keyof creates a union type 
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//another way to do it.
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (studet: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'classes')


/////////////////////////////
// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
// utility type Record allows literals
type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}