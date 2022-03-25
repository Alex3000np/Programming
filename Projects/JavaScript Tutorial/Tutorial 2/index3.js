//### Aync and Event loop

// C heck in browser console:
// console.log('program START')
// console.log('program WORKS')
// setTimeout(function () {
//     console.log('program 3sec POSTPONED')
// }, 3000)
// console.log('program END') 


//### Promise

// A. No Promise used example:
// console.log('Data requested...')

// setTimeout(() => {
//     console.log('Processing...')

//     const backendData = {
//         server: 'aws',
//         port: 999,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('data received ok', backendData)
//     }, 3000)

// }, 3000)


// B. Promise example (we have some async code wrapped in Promise 'p1'):
// console.log('Data requested...')

// const p1 = new Promise(function (resolve, reject) {      // both parameters are functions; 
//     setTimeout(() => {
//         console.log('Processing...')
//         const backendData = {
//             server: 'aws',
//             port: 999,
//             status: 'working'
//         }
//         resolve(backendData)                                       // code performed ok ('resolved' - promise work is done here) 
//     }, 3000)
// })

// p1.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clentData => {
//     console.log('data received ok', clentData)
// })


// C. Example:
// console.log('Data requested...')
// const sleepFunc = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleepFunc(2000).then(() => console.log('after 2 seconds'))
// sleepFunc(3000).then(() => console.log('after 3 seconds'))

// Executed once 'all' promises are resolved (5sec):
// Promise.all([sleepFunc(2000), sleepFunc(5000)])
//     .then(() => { console.log('all promises done') })
// Executed once first promise is resolved:
// Promise.race([sleepFunc(2000), sleepFunc(5000)])
//     .then(() => { console.log('race promises done') })
