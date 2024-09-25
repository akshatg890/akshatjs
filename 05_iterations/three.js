// for of
// const name=["akshat","anmol","anurag"]
// for (const element of name) {
//     console.log(element);
    
// }
// const n="Hello js"
// for (const el of n) {
//     console.log(el);
// }
const map=new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//we cannot do object iterate
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
