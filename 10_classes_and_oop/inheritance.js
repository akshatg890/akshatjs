class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course is added to ${this.username}`)
    }
}
const chai=new Teacher("akshat","ak@gmail.com","123");
chai.addCourse()
const tea=new user("tea");
// tea.addCourse()
tea.logMe()
console.log(chai instanceof user);