//### Convert object to -> JSON
const myPost = {
    title: 'My awesome post',
    likesQty: 5,
}
let covertedText = JSON.stringify(myPost)
//console.log(covertedText)

//### Convert JSON to -> object
const myPostFromJson = JSON.parse(covertedText)
console.log(myPostFromJson)