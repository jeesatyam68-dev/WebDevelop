// const ticket =new Promise(function(solution,solved){
// const isBoard=false;
// if(isBoard){
//     solution("you are okay to onboard!")
// }
// else{
//     solved("you are not eligible to onboard!")
// }
// })
// ticket.then((data)=>{
//     console.log("wohooo", data);
    
// }).catch((data)=>{
//     console.log("oh noo", data);
    
// })

// const getCandies=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//     let candies="🍬"
//     console.log("here is our candies");
//     // callback1(candies)
//     resolve("accepted")
    
// }, 5000)
// })
// }
// console.log(getCandies());


function checkInventory(callback){
    setTimeout(()=>{
        console.log("checking the inventory...")
        callback()
    }, 2000)
}
        

function createOrder(callback){
setTimeout(()=>{
    console.log("creating an order...")
    callback()
}, 1000)
}



function chargePayment(callback){
setTimeout(()=>{
    console.log("charging the payment...")
    callback()
}, 2000)
}

function sendInvoice(callback){
    setTimeout(()=>{
        console.log("sending the Invoice...")
        callback()
     }, 1000)
}



function main(){   
    checkInventory 
}
main()




//yeh hai call back but isko ham log aise nahi kar sakte bht jada readablity me dikkat aayega..

// checkInventory(()=>{
//   createOrder(()=>{
//     chargePayment(()=>{
//         sendInvoice(()=>{
//             console.log("everything's done!")
//         })
//     })
//   })
// })
// checkInventory()
// createOrder()
// chargePayment()
// sendInvoice()