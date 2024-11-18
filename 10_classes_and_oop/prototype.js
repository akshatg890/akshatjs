let myhero=['thor','spiderman'];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.akshat=function(){
    console.log("Akshat is present in all objects");
}
Array.prototype.hiakshat=function(){
    console.log("Akshat hello");
}
// heroPower.akshat()
// myhero.akshat();
// heroPower.hiakshat();
myhero.hiakshat()
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modernsymtax
Object.setPrototypeOf(TeachingSupport,Teacher);

let username="akshat     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}
username.truelength();
"hitesh   ".truelength();