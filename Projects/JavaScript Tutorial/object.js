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
