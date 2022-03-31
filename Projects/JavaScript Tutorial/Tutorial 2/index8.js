// Array methods: forEach, map, filter, reduce, find, findIndex


//### FOR

const myPeople = [
    { name: 'bob', age: 22, budeget: 60000 },
    { name: 'nick', age: 11, budeget: 70555 },
    { name: 'jack', age: 54, budeget: 8000 },
    { name: 'victor', age: 16, budeget: 9800 },
    { name: 'karen', age: 55, budeget: 100000 },
    { name: 'lucie', age: 15, budeget: 0 }
]

// for (let i = 0; i < myPeople.length; i++) {
//     console.log(myPeople[i])
// }


//### FOR OF

// for (const item of myPeople) {
//     console.log(item)
// }


//### FOR EACH 

//a.
// myPeople.forEach(function (item, i, pArr) {
//     console.log(item)
//     console.log(i)
//     console.log(pArr)
// })
//b.
// myPeople.forEach(item => {
//     console.log(item)
// });


//### MAP

// const newMyPeopleB = myPeople.map(item => { return 'hello' })               // 'map' create new array with text
// const newMyPeopleC = myPeople.map(item => { return item.name })             // 'map' create new array with names
// const newMyPeopleD = myPeople.map(item => `${item.name} (${item.age} yo)`)  // 'map' create new array with names + age ('return' can be ignored)


//### Filter

// const adults = []
// for (let i = 0; i < myPeople.length; i++) {
//     let person = myPeople[i]
//     if (person.age >= 18) {
//         adults.push(person)
//     }
// }

// const youngsters = myPeople.filter(item => {
//     if (item.age < 18) {
//         return true
//     }
// })

//const youngstersB = myPeople.filter(item => item.age < 18) //shorter version 


//### Reduce

// let totalAmount = 0
// for (let i = 0; i < myPeople.length; i++) {
//     totalAmount += myPeople[i].budeget
// }

//const totalAmount = myPeople.reduce((total, item) => { return total + item.budeget }, 0)  // parameter '0' - is 'total' start point 
//const totalAmount = myPeople.reduce((total, item) => total + item.budeget, 0)             // shorter version 


//### Find

// const victor = myPeople.find(item => item.name === 'victor')


//### FindIndex

//const victorIndex = myPeople.findIndex(item => item.name === 'victor')


//### Example

//a.
// const newPeople = myPeople
//     .filter(item => item.budeget > 10000)
//     .map(item => {
//         return {
//             info: `${item.name} - (${item.age} yo)`,
//             budget: item.budeget
//         }
//     })

//b.
// const amount = myPeople
//     .filter(item => item.budeget > 10000)
//     .map(item => {
//         return {
//             info: `${item.name} - (${item.age} yo)`,
//             budget: item.budeget
//         }
//     })
//     .reduce((total, item) => total + item.budget, 0)           // parameter '0' - is 'total' start point 