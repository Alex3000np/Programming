//### Convert object to -> JSON
// const myPost = {
//     title: 'My awesome post',
//     likesQty: 5,
// }
// let covertedText = JSON.stringify(myPost)
//console.log(covertedText)

//### Convert JSON to -> object
// const myPostFromJson = JSON.parse(covertedText)
// console.log(myPostFromJson)

//### Error try catch 
// const fnWithError = () => {
//     throw new Error('Opps Error!')
// }
// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }
// console.log('continue')     //this will appear in console due to try/catch

//### Conditional Statement IF
// const age = 8
// if (age > 18) {
//     console.log('Is Adult')
// } else if (age >= 12) {
//     console.log('Is Teenager')
// } else {
//     console.log('Is Child')
// }

//### Promise, async, await 
// A. Async (practice in chrome console)  
// const asyncFunc = async () => { throw new Error('there was an error') } //here Promise throws err
// asyncFunc()
//     .then(value => console.log(value))          //if Promise successfully done
//     .catch(err => console.log(err.message))     //if Promise returned err result: 'there was an error'

// B. Async await 
// const timerPromise = () =>
//     new Promise((resolve, reject) =>
//         setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer START')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer END', endTime - startTime)
// }
// asyncFn()
