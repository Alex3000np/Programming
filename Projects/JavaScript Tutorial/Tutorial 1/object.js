//### Object
// const myCity = {
//     city: 'new york',
//     country: 'usa',
//     info: {
//         isBig: true,
//         armyQty: 100
//     }
// }
// console.log(myCity.country)
// myCity.country = 'belarus'
// console.log(myCity.country)

//### Add property to object A
//myCity.isPopular = true
//console.log(myCity) //result object: { city: 'new york', country: 'usa', isPopular: true }

//### Add property to object B 
// myCity['peopleQty'] = 10
// console.log(myCity) //result object: { city: 'new york', country: 'usa', peopleQty: 10 }

//### Add property to object C
// const propetyName = 'peopleQty'
// myCity[propetyName] = 14
// console.log(myCity) //result object: { city: 'new york', country: 'usa', peopleQty: 14 }

//### Delete property from object
// myCity.isPopular = true
// delete myCity.isPopular
// console.log(myCity) //result: { city: 'new york', country: 'usa' }

//### Delete property from nested object
// console.log(myCity.info.isBig) 
// delete myCity.info.isBig 
// delete myCity.info['isBig']
// console.log(myCity.info) 

//### Object creation
// const name = 'alex'
// const postQty = 11
// long format
// const userProfileA = {
//     name: name,
//     postQty: postQty,
//     hasSighnedAgreement: false
// }
// short format
// const userProfileB = {
//     name,
//     postQty,
//     hasSighnedAgreement: false
// }

//### Object mutation
// const myPersonA = {
//     name: 'alex',
//     age: 20
// }
// const myPersonB = myPersonA
// myPersonB.name = 'pavel'        //this will ch myPersonA name too!
// console.log(myPersonA.name)     //result object: pavel

//### Avoid object mutation A* 
// const myPersonB = Object.assign({},myPersonA)  
// myPersonB.name = 'petro'
// console.log(myPersonA.name) 
// console.log(myPersonB.name)

//### Avoid object mutation B
// const myPersonB = {...myPersonA}
// myPersonB.name = 'lida'
// console.log(myPersonA.name)
// console.log(myPersonB.name)
//* both examples works ok only with simple object without nested object inside. 
// note taht change of nested field will mutate nested object

//### Avoid object mutation C*
// const myPersonC = JSON.parse(JSON.stringify(myPersonA))
// myPersonC.name = 'ivan'
// console.log(myPersonA.name)
// console.log(myPersonC.name)
//* example works ok with nested object inside, change will not affect original nested object

//### Object destructuring
// const userProfile = {
//     name: 'alexandr',
//     commentsQty: 23,
//     hasAgreement: true
// }
// const { name, commentsQty } = userProfile // creates new variables based on user object properties 
// const { hasAgreement } = userProfile
// console.log(name)                         // result: alexandr

//### Object destructuring in function
// const user = {
//     name: 'pepa',
//     commentsQty: 23,
//     hasAgreement: true
// }

// const showUserData = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `user ${name} has no comments`
//     }
//     return `user ${name} has ${commentsQty} comments`
// }
// console.log(showUserData(user)) 