//for loop
// for (let i = 0; i <=10; i++) {
//     if(i==3){
//         console.log("3 is my number")
//         break;
//     }
//      
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <=10; i++) {
//     const element = i;
//     console.log(`table of ${element}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j + '=' + i*j )
//     }
// }
const array=[10,20,30,40]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}