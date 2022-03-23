//### Function vs function expression
// function myFunction(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// const myFuncExpression = function (a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFuncExpression(5, 3))      //result: 9

//### Function expression isnide another function
//setTimeout(function () { console.log('delayed message') }, 2000)

//### Function w default parameter 
// function multByFactor(value, multiplier = 2) { return value * multiplier }
// console.log(multByFactor(5))          //10
// console.log(multByFactor(5, 3))       //15

//### Arrow function
// const myArrowFunc = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myArrowFunc(5, 3))

// const multByFactor = (value, multiplier = 3) => { return value * multiplier }
// console.log(multByFactor(5))         //15
// console.log(multByFactor(5, 1))      //5

//### Arrow function w default parameter 
// const newPostFunc = (post, addedAt = Date()) => ({       // "({})" returns object inside
//     ...post,
//     addedAt,         //addedAt : addedAt
// })
// const postA = {
//     id: 1,
//     author: 'ivanka'
// }
// console.table(newPostFunc(postA))

//### Short arrow function
// const myArrowFunc = (a, b) => a + b      //consist of one expression and returns result
// console.log(myArrowFunc(5, 3))

//### Arrow function isnide another function
//setTimeout(()=> { console.log('delayed message') }, 2000)

//### Import (from index.mjs - file has to be.mjs)
// import findSum from './index.mjs'
// let iportedFunct = findSum(5, 3)
// console.log(iportedFunct)

// import {
//     one,
//     two as twoRenamed   //we can rename variables 
// } from './index.mjs'
// console.log(`${one} and ${twoRenamed}`)

