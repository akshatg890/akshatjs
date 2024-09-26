const num=[1,2,3,4]
// const mynum=num.reduce(function item(acc,currval){
//     console.log(`acc value is ${acc} and currval value is ${currval}`);
    
//     return acc+currval
// },0)
// console.log(mynum);
const myTotal = num.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal)
const shopping=[
    {
        item: "shirt",
        price: 299
    },
    {
        item: "pant",
        price:199
    }

]
const pricetopay=shopping.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);

