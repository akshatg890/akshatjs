 class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password}akshat`
    }
    set password(value){
        this._password=value
    }
 }
 const hitesh=new User("ak@gmail.com","abc");
 console.log(hitesh.password)
 console.log(hitesh.email)