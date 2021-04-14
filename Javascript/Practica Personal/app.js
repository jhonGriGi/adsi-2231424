const multiply = (a, b) => {
    let resultado = 0 
    const positivo = Math.abs(b) == b
    for (i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado 
}
const a = multiply (-50, -50)
console.log(a)
// *****************************************
const getBiggest = (arr) => arr.reduce ((acc, el) => acc > el ? acc : el)
const b = getBiggest ([50, -1500, 0, 1, 42 ,20])
console.log(b)
// ******************************************
const clean = (arr) => arr.reduce((acc, el) => {
    if(el){
        acc.push(el)
    }
    return acc 
}, [])
const c = clean ([1, undefined, null, 0, 2, 3])
console.log(c)
// *****************************************
const arr = [[1,2], [[3,4]], [1,[]]]
//  1, 2, [3, 4], 1, {}
const flatten = arr => arr.reduce((acc, el) => arr.concat(el), [])
const d = flatten(arr)
console.log(d)
// *****************************************
const repeated = str => {
    const lowered = str.toLowerCase()
    const split = lowered.split(' ')
    const reduced = split.reduce((acc , el) => {
        if(acc[el]) {
            acc[el]++
        }else {
            acc[el] = 1
        }return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}
const e = repeated('this is a repeated word test this is a a')
console.log(e)
// ******************************************
const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reverse = splitted.reverse()
    const joined = reverse.join('')
    return lowered == joined 
}
const f = isPalindrome('Do geese see God')
console.log(f)