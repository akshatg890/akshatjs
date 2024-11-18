function SetUsername(username){
    this.username=username;
}
function createUser(username,email,password){
    SetUsername.call(this,username);
    this.email=email
    this.password=password;
}
const ak=new createUser("akshat","akg@gmail.com","1234")
console.log(ak);