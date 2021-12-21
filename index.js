

const myEach = (collection, callback) => {
    let newArr = []
    let result = []
    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    for (let item of newArr) {
        result.push(callback(item))
    }
    return collection
}

//---------------------------------------------


const myMap = (collection, callback) => {
    let newArr = []
    let result = []
    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    for (let item of newArr) {
        result.push(callback(item))
    }
    return result
}

//---------------------------------------------

// const obj = {one: 1, two: 2, three: 3, four: 4}
// const arr = [1, 2, 3, 4]

// const random = (acc, val, collection) => (acc + val)

const myReduce = (collection, callback, acc) => {
    let newArr = []
    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    if (acc === undefined) {
        acc = newArr[0]
        newArr.shift()
    }
    for (let item of newArr) {
        acc = callback(acc, item, collection)
    }
    return acc

}
// console.log(myReduce(obj, random, 10))


//---------------------------------------------

// const arr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]
// const random = (target) => {
//     return target % 2 == 0
//   }

const myFind = (collection, predicate) => {
    
    let newArr = []

    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    for (let item of newArr) {
        if (predicate(item)) {
            return item
        }
    }
}
// console.log(myFind(arr, random(0)))

//---------------------------------------------

const myFilter = (collection, predicate) => {
    let newArr = []
    let results = []
    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    for (let item of newArr) {
        if (predicate(item)) {
            results.push(item)
        }
    }
    return results
}

//---------------------------------------------

const mySize = (collection) => {
    let newArr = []
    if (Array.isArray(collection)) {
       newArr = [...collection]
    } 
    else {
        newArr = [...Object.values(collection)]
    }
    return newArr.length
}

//---------------------------------------------

const myFirst = (array, n) => {
    let newArr = array.slice()
    let results = []
    if (n === undefined) {
        return newArr[0]
    } else {
        for (let item of newArr) {
            results.push(item)
            if (item === n) {
                return results
            }
        }
    }
}

//---------------------------------------------

const myLast = (array, n) => {
    let newArr = array.slice()
    let results = []
    if (n === undefined) {
        return newArr[newArr.length - 1]
    } else {
        return newArr.splice(-3)
    }
}

//---------------------------------------------

function myKeys(object) {
    // let newObj = {...object}
    let arr = []
    for (let key in object) {
        arr.push(key)
    }
    return arr
}

//---------------------------------------------

const myValues = object => {
    // let newObj = {...object}
    let arr = []
    for (let key in object) {
        arr.push(object[key])
    }
    return arr
}

// BONUS SECTION
//---------------------------------------------
// BONUS FUNCTIONS:

const mySortBy = (array, callback) => {
    
}
