// array methodoligies 
// MAP,FILTER,FIND,REDUCE






const ourArray=[1,2,3,4,93,5,6]
// console.log(ourArray);


ourArray.forEach((number,index)=>{
console.log("Elements: ", number, "INDEX: ", index)
})



// 1.)MAP (it is also a high order thing it needs a function inside to run )
let increment=ourArray.map((increase)=>{
    return increase+50

})
console.log("1.) MAP",increment)
increment.forEach((newData,index)=>{
console.log("ELEMENT: ",newData, "INDEX: ", index )
})


//2.) FILTER  ("this is a high order function, it needs a function inside ")

const arr=ourArray.filter((data)=> data<4  )
console.log("2.) FILTER",   arr)

// 3.) FIND ("THIS IS USED TO FIND SOME DATA ")

const search=ourArray.find((data)=>{
if(data==93){
    return data
}
})
console.log("3.)FIND:",     search)

// 4.) REDUCE, it is used in totalling thing  like add to cart wali cheeze..

const reduceRS=ourArray.reduce((accumulatorValue,currentValue)=>{
return accumulatorValue+currentValue
}, 0) // yeh basically jo sum++ wala method tha na initial sum=0 waisa sa hai bass yeh baat hai ki yeh inbuilt hai toh isme loop nahi lagana padta 
console.log("4.)REDUCE:",    reduceRS)

// LET'S MAKE SOMETHING LIKE  IS THERE IN FLIPKART,AMAZON

const flipCart=[
    {
        Name:"Xiomi-17 Ultra",
        price:139999,
        Quantity:1,

    },
    {
        Name:"Wheat bag",
        price:160,
        Quantity:2,
    },
    {
        Name:"Sunscream",
        price:200,
        Quantity:2,
    }

]

const checkout=flipCart.reduce((accValue, currValue)=>{
return accValue+currValue.price*currValue.Quantity
}, 0)
console.log(checkout)

