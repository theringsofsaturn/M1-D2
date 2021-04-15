// an ALGHORITM is a finite set of steps for solving a particular problem


// DATA TYPES


// NUMBERS
// 5
// 5.5
// 45.24545654


// STRINGS
// "hello strivers"
// 'hello strivers'
// `hello strivers`


// BOOLEANS
// true
// false
// 3 > 2 --> true
// 4 > 10 --> false
// 3 === 3 --> true
// 10 === 5 --> false
// 5 === '5' --> false
// 'strive' === 'strive' --> true
// === --> checks if they are the same in VALUE and TYPE
// 5 == '5' --> true DO NOT USE THIS
// '' --> false
// 'nando' --> true 


// 3 + 4 = 7
// '3' + '4' = '34'


// SPECIAL ONES
// undefined -> the value is not there yet
// null -> not existing, the total absence of value


// VARIABLES
let firstValue = 10 // this is a variable creation, because I used let
// single = means ASSIGNMENT
// now firstValue is 10


console.log('!!!', firstValue)


let secondValue
// this notation is called camelCase
firstValue = 20
// now firstValue is 20


console.log('???', firstValue)


// firstValue is now 20, not 10 any more
secondValue = 'stefano'


let thirdValue
// now thirdValue is undefined


let sum = 30 + firstValue // actually I'm summing up 30 + 20
// sum has a value of 50


console.log('sum is', sum)


// var oldStyleVariable = 0 // DO NOT USE VAR
const thisValueWillNotChangeEver = 'sarah'
// thisValueWillNotChangeEver = 'Jacob' // THIS WILL TRIGGER AN ERROR


let difference = sum - 25
console.log('sum after difference', sum)


console.log('this is difference', difference)


let multiply = 10 * 5
let division = 50 / 10


let modulo = 25 % 5 // 0 so the remainder of the division


let result = (25 + 10) * 3


let multipleStrings = 'hello' + ' ' + 'Mykola'
console.log(multipleStrings)
let thisIsNotANumberAgain = '100'


console.log(thisIsNotANumberAgain + 100)
console.log(typeof thisIsNotANumberAgain)


let uppercaseString = multipleStrings.toUpperCase()
console.log(uppercaseString)
let thisIsNowLowerCase = uppercaseString.toLowerCase()
console.log(thisIsNowLowerCase)


// true
// false


// console.log(5 === 10)
console.log(6 >= 7)
console.log('stefano' !== 'shakira')


// && --> AND
// || --> OR


console.log(5 === 5 && 10 === 10)
// AND will return TRUE just if the expressions before and after
// are BOTH true


// TRUE && TRUE --> TRUE
// TRUE && FALSE --> FALSE
// FALSE && TRUE --> FALSE
// FALSE && FALSE --> FALSE


console.log(5 === 5 || 10 === 1)
// OR will return TRUE if at least ONE of the conditions are TRUE


// TRUE || TRUE --> TRUE
// TRUE || FALSE --> TRUE
// FALSE || TRUE --> TRUE
// FALSE || FALSE --> FALSE


console.log((4 < 5 && 5 > 10) || 5 !== 5)


// the cart has a total
// you have a threshold for giving free shipping
// if the total is > than the threshold, shipping is free
// the grand total will be the cart total
// if we don't reach the threshold, we need to add shipping cost


const cartTotal = 60


const freeShippingThreshold = 50
const shippingCost = 10


let grandTotal


if(cartTotal > freeShippingThreshold) {
// the grand total will be our cartTotal
// yey, I'm eligible for free shipping!!
    console.log("FREE SHIPPING!")
    grandTotal = cartTotal
} else {
    // if not, the total will be cartTotal + shippingCost
    // we're not eligible for free shipping!
    console.log("I'm sorry, no free shipping for you!")
    grandTotal = cartTotal + shippingCost
}


console.log('GRANDTOTAL IS', grandTotal)