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


//### 5. Map - SET

// const mySet = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
// mySet.add(10).add(20).add(30).add(20)
//console.log(mySet)                 //set removes duplicate values 
//console.log(mySet.has(20))     
//console.log(mySet.size)  
// mySet.delete(1)  
// mySet.clear()

// console.log(mySet.values())         //in set keys === values
// console.log(mySet.keys())
// console.log(mySet.entries())  

// for (const item of mySet) {
//     console.log(item)
// }


//### 6. Map - SET exapmle
// a. removing duplicates func
// function uniqVAlues(myArr) {
//     return [...new Set(myArr)]          // '...' - spread operator converts 'set' to 'array'
// }
// function uniqVAlues(myArr) {
//     return Array.from(new Set(myArr))   // second option
// }

// console.log(uniqVAlues([1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6]))


//### 7. WeakMap ('key' - can be object only) get set delete has 
// a.
//let myObj = { name: 'alex' }
// const arr = [myObj]
// myObj = null
// console.log(myObj)      // is null 
// console.log(arr[0])     // myObj stays in memory in array
// b.
// let myObject = { name: 'ivan' }
// const myWeakMap = new WeakMap([
//     [myObject, 'object`s data']
// ])
// myWeakMap.has(myObject)         //true
// myWeakMap.get(myObject)         //'object`s data'

// myObject = null
// myWeakMap.has(myObject)         //false
// console.log(myWeakMap)

// c. Example:  
// const cacheMap = new WeakMap()

// let userA = { name: 'lena' }
// let userB = { name: 'timon' }

// function cacheUser(user) {              //if we have user in cache > return his value, if not > add him to cache and return value
//     if (!cacheMap.has(user)) {
//         cacheMap.set(user, Date.now())
//     }
//     return cacheMap.get(user)
// }
// cacheUser(userA)                //calling func
// cacheUser(userB)

//console.log(cacheMap.get(userA)) //get value 'date'

// console.log(cacheMap.has(userA)) //true
// console.log(cacheMap.has(userB)) //true

// userA = null
// console.log(cacheMap.has(userA)) //false
// console.log(cacheMap.has(userB)) //true


//### 8. WeakSet ('value' - can be object only)
// const myUsers = [
//     { name: 'hitler' },
//     { name: 'stalin' },
//     { name: 'putin' }
// ]

//const visitsSet = new WeakSet(myUsers)      // add whole array
// const visitsSet = new WeakSet()
// visitsSet.add(myUsers[0]).add(myUsers[1])       // add one by one 

// console.log(visitsSet.has(myUsers[0])) //true
// console.log(visitsSet.has(myUsers[1])) //true

// myUsers.splice(1, 1)                   //deletes object from initial array; (index 1 and number 1 of elements for deletion)

// console.log(visitsSet.has(myUsers[0])) //true
// console.log(visitsSet.has(myUsers[1])) //false