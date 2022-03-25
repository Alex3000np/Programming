//### Prototype

// const person = {
//     name: 'alex',
//     age: 25,
//     greet: function () { console.log('privetik ot alex') }
// }

// const person = new Object({
//     name: 'bob',
//     age: 25,
//     greet: function () { console.log('privetik ot bob') }
// })

// we can add new function to prototype, so 'person' can have it too:
// prototype is property of global class 'Object'
// in prototype we can create new fields as function 'sayHello'
// Object.prototype.sayHello = function () { console.log('hello from class prototype') }

// based on person we can create new object 'lena'. 'person' will be a prototype
// const lena = Object.create(person)
// lena.name = 'Lena'
// lena.greet = function () { console.log('privetik ot Lena') }

//### Context this, call, bind, apply
// function hello() { console.log('helloo!') }

// const personPetr = {
//     name: 'petr',
//     age: 6,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window),
//     getInfo: function (job, phone) {
//         console.log(`Name is ${this.name}`)
//         console.log(`Job is ${job}`)
//     }
// }

// const personLena = {
//     name: 'lena',
//     age: 8,
// }

// by using 'bind' we can apply personPetr function for personLena object 
// option a with 'function':
// const lenasInfo = personPetr.getInfo.bind(personLena)
// lenasInfo('soldger','78-38-33')

// option b with 'bind' (we fill in personLena context and params):
// const lenasInfo = personPetr.getInfo.bind(personLena, 'programmer', '78-38-33')
// lenasInfo()

// option c with 'call' or 'apply' are called imidiately 
// personPetr.getInfo.call(personLena, 'doctor', '78-38-99')       // (fill in personLena context and params):
// personPetr.getInfo.apply(personLena, ['pilot', '100-38-99'])    // (fill in personLena context and params as array):

//### 'Prototype' & 'this' example
// const myArray = [1, 2, 3, 4, 5, 6]
// const multBy = (inputArr, multValue) => inputArr.map(element => element * multValue)
// console.log(multBy(myArray, 2))

// we can add 'multBy' function to 'Array.prototype' so array always can use it 
// Array.prototype.multBy = function (multValue) { return this.map(element => element * multValue) }
// console.log(myArray.multBy(3))


