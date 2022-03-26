//### A. Object.create
// const myPersonA = Object.create(
//     {
//         calculateAge() {
//             console.log('Age is:', new Date().getFullYear() - this.birth)
//         }
//     },
//     {
//         name: {
//             value: 'peter1',
//             enumerable: true,    //makes it "visible"
//             writable: true,      //let us make changes in this property
//             configurable: true   ////let us delete 'name' field (delete myPersonA.name)
//         },
//         birth: {
//             value: 1990,
//         },
//         age: {
//             //writable: true,
//             get() { return new Date().getFullYear() - this.birth },
//             set(value) { console.log('set age:', value) }
//         }
//     }
// )

// myPersonA.name = 'Sirena' // can be changed 
// myPersonA.birth = 1       // cant - writable is false by default 

// for (let key in myPersonA) {
//     console.log('keyA: ', key)
// }


//### B. normal object
// const myPersonB = { name: 'ivan', birth: 1995 }

// for (let key in myPersonB) {
//     console.log('keyB: ', key)
// }