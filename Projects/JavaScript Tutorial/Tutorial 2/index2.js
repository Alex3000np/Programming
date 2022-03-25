//### Closure (Замыкание)

// function myCalcFunc(number) {
//     return function () { console.log(10 * number) }
// }
// const calc = myCalcFunc(12) // variable 'calc' is function 
// calc()

//### A. example:
// function createIncrementor(myNumber) {
//     return function (myValue) {
//         return myNumber + myValue
//     }
// }
// const addOne = createIncrementor(1)  // variable 'addOne' is func which is closed on 'myNumber = 1'
// const addTen = createIncrementor(10) // variable 'addTen' is func which is closed on 'myNumber = 10'
// console.log(addTen(5))               // parameter refers to 'myValue'

//### B. example: 
// function getUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = getUrl('com')         // variable 'comUrl' is func which is closed on 'domain = com'
// console.log(comUrl('google'))

//### C. example:
// Task: create my own 'bind' function:

// function myBind(myContext, myFunct) {
//     return function (...args) { myFunct.apply(myContext, args) } // args is array with all perameters 
// }

// function logPerson() { console.log(`person: ${this.name}, age: ${this.age}, job: ${this.job} `) }

// const person1 = {
//     name: 'lena',
//     age: 8,
//     job: 'doctor'
// }

// const person2 = {
//     name: 'viktor',
//     age: 10,
//     job: 'student'
// }

// myBind(person1, logPerson)()
// myBind(person2, logPerson)()

