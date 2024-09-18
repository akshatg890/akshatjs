const score=400
console.log(score)
const balance= new Number(100)
console.log(balance.toFixed(3))
console.log(balance)
const othernum=123.46578
console.log(othernum.toPrecision(5))
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(7.4))
console.log(Math.floor(7.8))
console.log(Math.min(6,8,9))
console.log(Math.max(6,8,9))
console.log(Math.random())
console.log(Math.random()*100 +1)
console.log((Math.random()*100) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)