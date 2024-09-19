const arr=[1,3,4,5,6]
const arr1=["akshat", "anmol","nikhil"]
console.log(arr[1])
//array methods
arr.push(8)
arr.push(9)
arr.pop()
console.log(arr)
arr.unshift(2)
console.log(arr)
console.log(arr.includes(8))
console.log(arr.indexOf(2))
console.log(arr.join())
//slice and splice
console.log(arr.slice(1,3))
//after slice array will be same
console.log(arr);
console.log(arr.splice(1,3))
//after splice array will be changed and splice part of array will be deducted from new array
console.log(arr)