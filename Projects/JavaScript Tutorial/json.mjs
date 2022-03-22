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
const age = 8
if (age > 18) {
    console.log('Is Adult')
} else if (age >= 12) {
    console.log('Is Teenager')
} else {
    console.log('Is Child')
}