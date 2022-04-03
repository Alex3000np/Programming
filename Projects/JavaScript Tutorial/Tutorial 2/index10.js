//### 1a. XMLHttpRequest (XHR) (GET)
const requestURL = 'https://jsonplaceholder.typicode.com/users'
// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestURL)                 // opens new connection for GET method

// Display response in console - option 1:
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))   // parsing response into object 
// }

// Display response in console - option 2:
// xhr.responseType = 'json'                   // difines response type 
// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
// }

// Error handling:
// xhr.onerror = () => {
//     console.log(xhr.response)                  // this will be triggered if wrong url or any other err
// }

// xhr.send()                                     // sends the requset to server

//### 1b. XMLHttpRequest (XHR) - (GET) with Promises 
// function sendRequest(method, url) {               // func wraps result into promise and returns it
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }

//         xhr.onerror = () => {
//             reject.log(xhr.response)
//         }

//         xhr.send()
//     })
// }

// sendRequest('GET', requestURL)
//     .then(myData => console.log(myData))
//     .catch(myErr => console.log(myErr))

//### 1c. XMLHttpRequest (XHR) - (GET, POST) with Promises 
// function sendRequest(method, url, body = null) {               // func wraps result into promise and returns it, 'post' should have body
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }

//         xhr.onerror = () => {
//             reject.log(xhr.response)
//         }

//         xhr.send(JSON.stringify(body))
//     })
// }

// const myPerson = {
//     name: 'sasha',
//     age: 26
// }

// sendRequest('POST', requestURL, myPerson)
//     .then(myData => console.log(myData))
//     .catch(myErr => console.log(myErr))


//### 2a. Fetch (with GET)
// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//         return response.json()
//     })
// }

// sendRequest('GET', requestURL)
//     .then(myData => console.log(myData))
//     .catch(myErr => console.log(myErr))

//### 2b. Fetch (woth POST)
// const myPerson = {
//     name: 'pumba',
//     age: 30
// }

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         return response.json()
//     })
// }

// sendRequest('POST', requestURL, myPerson)
//     .then(myData => console.log(myData))
//     .catch(myErr => console.log(myErr))


//### 3. Error handling 
// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         
//         if (response.ok) {
//             return response.json()
//         }
//         
//         return response.json().then(myErr => {
//             const e = new Error('error happened')
//             e.data = console.error
//             throw e
//         })
//     })
// }