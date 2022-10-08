//### 1 Destructuring assignment with array
// a. example no Destructuring
// function calcValues(a, b) {
//     return [
//         a + b,
//         a - b
//     ]
// }
// const result = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// console.log(sum, sub)
// b. example with Destructuring
// const result = calcValues(42, 10)
// const [sum, sub] = result
// console.log(sum, sub)
// c. example with Destructuring
// const [sum, sub] = calcValues(42, 10)
// console.log(sum, sub)
// d. example with Destructuring
// function calcValuesB(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]
// }
// e. example with Destructuring
// const [sum, , mult] = calcValuesB(42, 10)        // ignoring 'sub'
// console.log(sum, mult)
// f. example with Destructuring
// const [sum, , mult, ...other] = calcValuesB(42, 10) // using '...' rest to get an array
// console.log(sum, mult, other)  
// g. example with Destructuring
// const [sum, sub = 'message if not defined', mult, ...other] = calcValuesB(42, 10)
// console.log(sum, mult, other, sub)

//### 2 Destructuring assignment with objects
const person = {
    name: 'bob',
    age: 25,
    address: {
        country: 'Ukraine',
        city: 'Kiev'
    }
}
// a.
// const {
//     name: firstName = 'NAME not defined',
//     age,
//     car = 'CAR not defined',
//     address
// } = person
// console.log(firstName, age, car, address)
// b.
// const {
//     name: firstName = 'NAME not defined',
//     age,
//     car = 'CAR not defined',
//     address: { city: homeTown, country }              // inner Destructuring for 'address' obj
// } = person
// console.log(firstName, age, car, homeTown, country)
// c. Destructuring with rest 
// const { name, ...info } = person
// console.log(name, info)
// d. Example 
// option without Destructuring
// function logPerson(myPerson) {
//     console.log(myPerson.name + ' ' + myPerson.age)
// }
// logPerson(person)
// option with Destructuring
function logPerson({ name: firstName = 'default name', age }) {
    console.log(firstName + ' ' + age)
}
logPerson(person)