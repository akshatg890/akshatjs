const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
});
promise1.then(function(){
    console.log('promise1 completed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2');
        resolve();
    },1000)
}).then(function(){
    console.log('promise2 completed');
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
            resolve({username:"akshat",email:"akshat@90.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"akshat",password:"1234"});
        }else{
            reject("Error: something went wrong")
        }
        
    },1000)
}).then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or reject");
})

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"akshat",password:"123456"});
        }else{
            reject("Error: JS went wrong")
        }
        
    },1000)
})
async function consumePromise(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise()