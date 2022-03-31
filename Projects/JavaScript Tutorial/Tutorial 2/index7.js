//### 1/2 Proxy
//-------------------------------------------------------------------------------------------------------------

//### 1. Proxy - Objects
// const person = {
//     name: 'Bob',
//     age: 22,
//     job: 'doctor'
// }

// example A.
// const proxyPersonA = new Proxy(person, {
//     get(target, prop) {
//         console.log('Target object is:', target)
//         console.log('Property is:', prop)
//         return target[prop]
//     }
// })

// example B.
// const proxyPersonB = new Proxy(person, {
//     get(target, prop) {

//         console.log(`Getting Property: ${prop}`)
//         return target[prop]
//     },
//     set(target, prop, myValue) {
//         if (prop in target) { target[prop] = myValue }
//         else { throw new Error(`no prop field ${prop} in target`) }
//     },
//     has(target, prop) {     //says if object 'has' certain field T/F
//         return ['name', 'age', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop) {
//         console.log(`${prop} - has been DELETED`)
//         delete target[prop]
//     }
// })

// example C.
// const proxyPersonC = new Proxy(person, {
//     get(target, prop) {
//         if (!(prop in target)) {
//             return prop
//                 .split('_')
//                 .map(p => target[p])
//                 .join(' ')
//         }
//         return target[prop]
//     }
// })


//### 2. Proxy - Functions
// const showLog = textInput => `See the Log: ${textInput}`

// const proxyShowLog = new Proxy(showLog, {
//     apply(target, thisArg, allArgs) {           //'target' is orig function 'showLog', 'thisArg' is context, 'allArgs' - all params we pass to our function showLog (here only text)
//         console.log('calling function...')
//         console.log(allArgs)
//         return target.apply(thisArg, allArgs).toUpperCase()
//     }
// })


//### 3. Proxy - Class
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args) {                   //target is "Person" indeed
//         console.log('construct ....')

//         return new Proxy(new target(...args), {
//             get(t, prop) {
//                 console.log(`getting prop: ${prop}`)
//                 return t[prop]
//             }
//         })
//     }
// })

// const p = new PersonProxy('max', 30)


//### 2/2 Proxy
//-------------------------------------------------------------------------------------------------------------

//### 1. Proxy, example with Wrapper
// Adding default value to the key, if key is not defined
// const withDefaultValue = (target, defaultValue) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
//     })  
// }
// Creating object 'position' based on proxy 
// const position = withDefaultValue({ x: 24, y: 42 }, 8)

//### 2. Proxy, hidden properties example (hide property which starts with '_')
// const withHiddenProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),        //returns true if property not hidden
//         ownKeys: obj => Reflect.ownKeys(obj)                                    //returns array with object's keys 
//             .filter(myProp => !myProp.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0   // receiver is proxy which we return  
//     })
// }

// const data = withHiddenProps({ name: 'Libor', age: 25, _uid: 111 })             //_uid will be hidden 

//### 3. Proxy optimization  
// const userData = [
//     { id: 11, name: 'bob', job: 'doctor', age: 18 },                             //userData.find(u=>u.id ===2) //this is demanding operaton, can be improved by proxy 
//     { id: 22, name: 'nick', job: 'poet', age: 25 },
//     { id: 33, name: 'sara', job: 'artist', age: 15 },
//     { id: 44, name: 'peter', job: 'soldger', age: 44 }
// ]

// const index = {}                            //empty obj
// userData.forEach(j => (index[j.id] = j))    //input 'j' line to index object by 'j.id' key

// Class
// const IndexedArray = new Proxy(Array, {
//     construct(target, [args]) {
//         const index = {}
//         args.forEach(element => (index[element.id] = element))
//         return new Proxy(new target(...args), {
//             get(arr, prop) {
//                 switch (prop) {
//                     case 'push':
//                         return item => {
//                             index[item.id] = item
//                             arr[prop].call(arr, item)
//                         }
//                     case 'findById': return id => idex[id]
//                     default:
//                         return arr[prop]
//                 }
//             }
//         })
//     }
// })

// const users = new IndexedArray(userData)


//### A. Generator. Symbol iterator, For of
//-------------------------------------------------------------------------------------------------------------
// function* stringGenerator() {
//     yield 'P'
//     yield 'E'
//     yield 'T'
//     yield 'E'
//     yield 'R'
// }

// const str = stringGenerator()

// function* numberGenerator(number = 5) {
//     for (let i = 0; i < number; i++) {
//         yield i
//     }
// }

// const resultA = numberGenerator()

// B. Creating own generator
// const iterator = {              //creating object 'iterator' with func 'myGenerator'
//     myGenerator(n = 5) {
//         let i = 0
//         return {                //returns object with func 'next'
//             next() {
//                 if (n > i) {
//                     return { value: ++i, done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//     }
// }

// C. For of:
// for (let j of 'hello') {
//     console.log(j)
// }