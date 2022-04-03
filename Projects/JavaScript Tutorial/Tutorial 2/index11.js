//### 1 a. Spread (...) with array
// const citiesBelarus = ['grodno', 'minsk', 'polotsk', 'brest']
// const citiesEurope = ['berlin', 'prague', 'paris']

// console.log(...citiesBelarus) //converts to string
// opt 1 '...'
// citiesBelarus2 = [...citiesBelarus]                      //new arr (copied from citiesBelarus)
// const allCities = [...citiesBelarus, ...citiesEurope]    //new arr (joined Belarus + Europe)
// const allCities2 = [...citiesBelarus, 'bagdad', ...citiesEurope]
// opt 2 'Concat'
// const allCities3 = citiesBelarus.concat(citiesEurope)


//### 1 b. Spread (...) with object
// const citiesBelarusWithPopulation = {
//     grodno: 3,
//     minsk: 1.5,
//     polotsk: 1,
//     brest: 4
// }
// const citiesEuropeWithPopulation = {
//     berlin: 10,
//     prague: 2,
//     paris: 12
// }
// console.log({...citiesEuropeWithPopulation}) // using '...' new obj created in {}
// console.log({ ...citiesEuropeWithPopulation, ...citiesBelarusWithPopulation }) // using '...' new joined obj created in {}


//### 2. Example
//a. array:
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))        //func 'max' doesn't work with array, '...' needed
// console.log(Math.max(...numbers))           //modern way    
// console.log(Math.max.apply(null, numbers))  //outdated way

//b. html div:
// const divs = document.querySelectorAll('div')
// console.log(divs)
// const nodes = [...divs] //converts 'divs' nodelist to array format
// console.log(nodes)


//### 3 a. Rest
// a. using spread '...'
// function sum(a, b) { return a + b }
// const myNumbers = [1, 2, 3, 4, 5]
// console.log(sum(...myNumbers))      //result 3, func takes first two numbers only  
// b. using rest
// function sumB(a, b, ...rest) {
//     return a + b + rest.reduce((a, i) => a + i, 0)
// }
// const myNumbersB = [1, 2, 3, 4, 5]
// console.log(sumB(...myNumbersB))      //result 15, func takes all numbers 


//### 3 b. Example Rest
// const person = {
//     name: 'max',
//     age: 20,
//     city: 'Kyiv',
//     country: 'Ukraine'
// }
// const { name, age, ...addressInfo } = person
// console.log(name, age, addressInfo) //address is new object now 