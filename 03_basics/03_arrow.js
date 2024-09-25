const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


const addtwo= (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(5,7))

const add=(n1,n2)=> n1+n2
console.log(add(3,4))

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo())