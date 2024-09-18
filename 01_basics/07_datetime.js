let  date= new Date()
console.log(date.toString())
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toJSON());
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
let createadate=new Date(2024, 08, 19);
console.log(createadate.toLocaleDateString())
let myCreatedDate = new Date(2024, 8, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
