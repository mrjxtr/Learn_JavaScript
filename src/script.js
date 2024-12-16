// ? To print something in the console
console.log("Hello World!")
console.error("This is an error")
console.warn("This is a warning")

const cc = 64
console.log(`V=${cc}`) // Formatted with ${}

// ? To get user input
// !npm init -y
// !npm install prompt-sync
const prompt = require("prompt-sync")()
const p = prompt("Type something here: ")
console.log(p)

// ? Primitive Data Types

/*
String = "" '' ``
Boolean = true false
Number = -9 0 1 2.5
undefined = type and value is undefined (you can define later)
null = set something as nothing 
BigInt = large int value
 */

// ? Variables

var thisVar = "hello" // can be chanced later
let thisLet = "hello" // can be chanced later
const thisConst = "hello" // you can't change this

if (true) {
    // let and const are block-scpped
    let x = 3
    const y = 4
    console.log(x, y)
}

if (true) {
    // var function-scoped and hoisted
    // if not in a function, you can access globaly in
    var z = 5
}
console.log(z)

// ? Arithmetic Operators
// ? take note of JavaScript's "type coersion" or "type conversion"
// ? when using Arithmetic Operations with values of different types

/*
+ addition
- subtraction
/ division
* multiplication
** exponential
% modulus

-- decrement
++ increment

+=
-=
*=
/=
 */

// ? Type Conversion13467.024 

const x1 = "123"
const x2 = "123.123"
const x3 = "123px"
const x4 = 123

console.log(Number(x1) + x4) // int and floats
console.log(parseInt(x3) + x4) // takes int from string
console.log(parseFloat(x2) + x4) // takes float from string
console.log(String(x4) + x1) // convert to string
console.log(x4 + "") // convert to string
console.log(x4.toString()) // convert to string

// ? Comparison Operator

/*
== equal to - loose equality (uses type coersion)
=== equal to - strict equality
!= not equal - to loose equality (uses type coersion)
!== not equal - to strict equality
< less than
> greater than
<=less than or equal to
>= greater than or equal to
 */

// ? Logical Operator

/*
 && and
 || or
 ! not
 */

// ? if/else if/else

if (true) {
    console.log("that is true")
} else if (false) {
    console.log("that is false")
} else {
    console.log("that is okay")
}

// if single line, the "{}" does not matter
if (true)
    console.log("that is true")
else if (false)
    console.log("that is false")
else
    console.log("that is okay")

//ternary condition or "one liner"
const cond = 2 < 3 ? "Okay cool" : "Not cool"
console.log(cond)

// ? Switch Statements

const value = 3

// ! adding the "break;" is important
switch (value) {
    case 3:
        console.log("3 is cool")
        break;
    case 4:
        console.log("4 is not cool")
        break;
    default:
        console.log("all is okay")
        break;
}

// ? JavaScript Array

const arr1 = [] // this is mutable even if it is 'const'
const arr2 = [1, 2, 'three', true] // does not have to be the same type
const arr3 = new Array(5)
const arr4 = Array.from("iterable")
console.log(arr1, arr2, arr3)
console.log(arr1, arr2[3], arr3) // indexing arrays
console.log(arr4)

arr4[0] = 'y'
console.log(arr4) // changing values in an array
console.log(arr4[arr2.length - 1]) // "-1" bacause we are 0 indexing

arr4[arr2.length + 5] = 'test'
console.log(arr4) // adding values in an array

const arr5 = Array.from("hello")
arr5.push(4) // add value to the end of array
console.log(arr5)

const arr6 = Array.from("hello")
arr6.pop() // remove value at the end of array
console.log(arr6)

const arr7 = Array.from("hello")
arr7.shift() // remove first value of an array
console.log(arr7)


const arr8 = Array.from("hello")
arr8.unshift('new') // add value to start of an array
console.log(arr8)
console.log(arr8.indexOf('l')) // to find the first index something in the array
console.log(arr8.lastIndexOf('l')) // to find the last index something in the array
console.log(arr8.includes('l')) // to find if something is in the array

const arr9 = arr7.concat(arr8) // concat to and array
console.log(arr9)

const arr10 = arr9.join('') // turn array into a string
console.log(arr10)

const arr11 = arr9.slice(1, 3) // get a copy of a section of the array
console.log(arr11)

const arr12 = arr9.splice(1, 2) // remove a section of the array
console.log(arr12)
console.log(arr9)

