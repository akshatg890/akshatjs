function saymyname(){
    console.log("a");
    console.log("k");    
}
saymyname()
function addtwonumber(num1,num2){
    return num1+num2;
}
console.log(addtwonumber(7,8))

function loginUsername(name){
    if(!name){
        console.log("PLease enter a username");
        return
    }
    return `${name} is logged in.`
}
console.log(loginUsername("sam"))

function calculateprice(val1, val2,...num1){
    return num1
}
console.log(calculateprice(200,400,300))

// const obj={
//     user: "Akshat",
//     price: 199
// }
function handleobj(anyobject){
    const result=`User name is ${anyobject.username} and price is ${anyobject.price}`
    return result
}
console.log(handleobj({
    username: "sam",
    price: 399
}))
//console.log(handleobj(obj))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));