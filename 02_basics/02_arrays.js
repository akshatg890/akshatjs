const disney=["dorameon","shinchan","ultrab"]
const nick=["ninjahattori","motupatlu","keymon"]
//console.log(disney.push(nick))
const mix=disney.concat(nick)
console.log(mix);
const all=[...disney,...nick]
console.log(all);
const num=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const num1=num.flat(Infinity)
console.log(num1);
console.log(Array.isArray("Akshat"))
console.log(Array.from("Akshat"))
let sc=100;
let sc1=200;
let sc2=300;
console.log(Array.of(sc,sc1,sc2));


