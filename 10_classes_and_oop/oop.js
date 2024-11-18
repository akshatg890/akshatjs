const user={
    username:"akshat",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Get user details from database");
        console.log(`Username: ${this.username}`);
        //console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.gretting=function(){
        console.log(`hello ${this.username}`);
        
    }

    return this
}
const user1=new User("Akshat",12,true);
console.log(user1);
console.log(user1.constructor);