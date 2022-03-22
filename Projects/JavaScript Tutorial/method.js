//### Method long 
// const myCity = {
//     city: 'new york',
//     cityGreeting: function () { console.log('hi from ' + this.city) }
//}
//### Method short 
// const myCityB = {
//     city: 'prague',
//     cityGreeting() { console.log('hi from ' + this.city) }
// }
// myCity.cityGreeting()
// myCityB.cityGreeting()

//### Array 
// const myArrayA = [1,2,3]
// const myArrayB = new Array(1,2,3)
// console.log(myArrayB)
// const myArrayC = [1,true,'michal']
// myArrayC[3] = 12
// console.log(myArrayC.length)
// console.log(myArrayC[2])

// const myArrayD = [1, true, 'michal']
// myArrayD.push(4)        //adds to the end 
// myArrayD.unshift('x')   //adds to the start 
// myArrayD.shift()        //deletes first
// myArrayD.pop()          //deletes last
// console.log(myArrayD)

//### Array destructuring
// const myFruits = ['apple','banana']
// const [a,b] = myFruits
// console.log(b)

//### For each  (ok for arrays)
// const myArr1 = [1, 2, 3]
// myArr1.forEach(myDigit => console.log(myDigit * 2))
// const myArrayF = ['First', 'Second', 'Third']
// myArrayF.forEach((element, index) => { console.log(`ELEMENT: ${element} INDEX: ${index}`) })

//### For in  (ok for objects)
// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// for (const key in myObject) { console.log(key, myObject[key]) }

// Object.keys(myObject).forEach(myKey => { console.log(myKey) })
// Object.values(myObject).forEach(myValue => { console.log(myValue) })

//###For of (NOT for objects)
// const myArrayG = myArray = [true, 10, 'my text']
// for (const myElement of myArrayG) { console.log(myElement) }

//### Map
// const myArr2 = [1, 2, 3]
// const newArr = myArr2.map(myDigit => myDigit * 3)


