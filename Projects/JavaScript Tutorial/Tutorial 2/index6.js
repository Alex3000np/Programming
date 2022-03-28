//### Promise
// returns promise and creates fake dalay:
// const delayFunc = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

//delayFunc(2000).then(() => console.log('2 sec gone...'))

//### A. Fetch with 'Promise':
// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodods() {
//     console.log('fetch started!')
//     return delayFunc(2000)                  
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodods()
//     .then(data => { console.log('data:', data) })
//     .catch(e => console.log(e))

//### B. Fetch with 'Async Await':
// async function fetchAsyncTodods() {
//     console.log('fetch started!')
//     try {
//         await delayFunc(3000)
//         const responce = await fetch(url)
//         const data = await responce.json()
//         console.log('data from web:', data)
//     } catch (e) {
//         console.log(e)
//     }
// }

// fetchAsyncTodods()