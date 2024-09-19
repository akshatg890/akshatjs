//singleton object
const obj=new Object()
//non-singleton object
const obj1={}
obj1.email="akshat@google";
obj1.loggedIn=false;
console.log(obj1)
const regular={
    fullname: {
        userfullname: {
            firstname: "Akshat",
            lastname: "Gupta"
        }
    }
}
console.log(regular.fullname.userfullname.lastname);
const obj2={1:"a",2:"b"}
const obj3={3:"c",4:"d"}
const obj4=Object.assign({},obj2,obj3)
console.log(obj4);
const obj5={...obj2,...obj3}
console.log(obj5);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
console.log(obj1.hasOwnProperty("email"))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]