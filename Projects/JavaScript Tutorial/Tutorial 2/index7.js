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

