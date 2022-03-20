// let myName
// console.log(myName) //result: undefined
// myName = 'lola'
// console.log(myName)

//### Function:
// const sayHi = () => {console.log('Hello!')}
// sayHi()
// sayHi = 10 //result: TypeError: Assignment to constant variable.

//### let x const
//let myNumberA
//myNumberA = 10
//myNumberA = 12
//console.log(myNumberA)

//const myNumberB = 1
//myNumberB = 2 // TypeError: Assignment to constant variable.
//console.log(myNumberB)

//### Logical operator 
// let myNumberFalse = 0 
// let myValueTrue = 'text'
// let myBoolTrue = true
// let myBoolFalse = false

//console.log(myNumberFalse || myValueTrue) // result: text (first is false, program proceeds and returns fruthter true value, or last one) 
//console.log(myBoolFalse || myNumberFalse)
//console.log(myBoolFalse && myNumberFalse) // result: false (&& looks for first false value to retun it, othervise returns last one)
// console.log(myBoolTrue && myNumberFalse && myValueTrue)

//### Spread operator "..." A
// const myButtonA = {
//     width: 200,
//     text: 'buy'
// }
// const myRedButton = { //adding 'color' property 
//     ...myButtonA,
//     color: 'red'
// }
// console.table(myRedButton)

//### Spread operator "..." B 
// const myButtonB = {
//     height: 500,
//     color: 'yellow'
// }
// const myButtonJoined = { //creates object with joined properties, mind object mutation in case of nested objects
//     ...myButtonA,
//     ...myButtonB
// }
// console.table(myButtonJoined)


