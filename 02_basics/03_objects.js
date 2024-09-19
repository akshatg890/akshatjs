//literal objects
const sym=Symbol("key1")
const objects={
    name:"Akshat",
    "full":"kumar",
    [sym]: "mykey1",
    age: 20,
    email:"akshat@gmail.com",
    isLoggedIn:"false",
    lastLogin: ["monday","tuesday"]
}
// console.log(objects.email)
// console.log(objects["email"]);
// console.log(objects["full"])
// console.log(objects[sym])
objects.email="sumit@gmail.com"
console.log(objects)
// Object.freeze(objects)
objects.age=19
console.log(objects)
objects.greeting=function(){
     console.log("Hello objects")
 }
 objects.greettwo=function(){
    console.log(`hello object, ${this.name}`);
    
 }
console.log(objects.greeting());
console.log(objects.greettwo());
// objects.greeting = function(){
//     console.log("Hello JS user");
// }
// objects.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(objects.greeting());
// console.log(objects.greetingTwo());
