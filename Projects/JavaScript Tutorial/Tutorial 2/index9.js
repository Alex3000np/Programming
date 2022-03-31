//### 1. Map
// const myObject = {          // object 
//     name: 'alex',
//     age: 32,
//     job: 'no job'
// }

// const myEntries = [         //  array
//     ['name', 'alex'],
//     ['age', 32],
//     ['job', 'no job']
// ]

// console.log(Object.entries(myObject))       // convert object to array 
// console.log(Object.fromEntries(myEntries))  // convert array to object 

//const myMap = new Map(myEntries)
//console.log(myEntries)
//console.log(myMap.get('job'))
// myMap.set('newField', 42)
// console.log(myMap.get('newField'))

// myMap
//     .set(myObject, 'my value of myObject')
//     .set(NaN, 'my value of nan')

// myMap.delete('job')
// console.log(myMap.has('job')) //false - was deleted above
// console.log(myMap)
// console.log(myMap.size) 
// myMap.clear()
// console.log(myMap.size)


// ### 2. Map - FOR OF/FOR EACH
// for (const item of myMap) {
//     console.log(item)
// }
// for (const [key, value] of myMap) {
//     console.log(key, '| --> |', value)
// }
// for (const myValue of myMap.values()) {
//     console.log(myValue)
// }
// for (const myKey of myMap.keys()) {
//     console.log(myKey)
// }
// myMap.forEach((myValue, myKey, map) => {  //'map' is myMap itself
//     console.log(myValue, myKey)
// })


//### 3. Map - convert to array, object
// const myArrA = [...myMap]      // '...' - spread operator
// console.log(myArrA[0])

// const myArrB = Array.from(myMap)
// console.log(myArrB[0])

// const myObjectB = Object.fromEntries(myMap)
// console.log(myObjectB)


//### 4. Map - example
// const allUsers = [
//     { name: 'maxik' },
//     { name: 'lena' },
//     { name: 'misha' }
// ]

// const visits = new Map()

// visits
//     .set(allUsers[0], new Date())
//     .set(allUsers[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(allUsers[2], new Date(new Date().getTime() + 5000 * 60))

// function getLastUser(user) { return visits.get(user) }
// console.log(getLastUser(allUsers[2]))


//### 5. Map - SET 20:47