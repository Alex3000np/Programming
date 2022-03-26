// 8 kyu lowest, my level 6-7:
function isNice(arr) {
    let result = false
    let trueCounter = 0
    let inputLength = arr.length

    for (let i = 0; i < inputLength; i++) {
        for (let j = 0; j < inputLength; j++) {
            if (arr[i] == arr[j] + 1 || arr[i] == arr[j] - 1) {
                trueCounter++
                break
            }
        }
    }
    if (trueCounter == inputLength && inputLength > 0) { result = true }
    console.log(arr)
    return result
}

console.log(isNice.apply([1, 3]))
