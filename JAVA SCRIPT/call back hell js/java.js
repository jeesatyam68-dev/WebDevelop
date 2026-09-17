    // console.log("first")
    // console.log("second")
    // console.log("third")
    // setTimeout(()=>{
    //     console.log("this msg will appear after 4sec.")
    // }, 4000)
    // consaole.log("fourth")
    
    const getCandies=(callback1)=>{
        setTimeout(()=>{
            const candies="🍬"
            console.log("here is our candies", candies)
            callback1(candies) //yeh callback ke andar walla jo bhi likkhoge uske baad hi apna dusra wala statement print hoga 
        }, 5000)
    }
    
    const handoverKeys=(candies, callback2)=>{
        setTimeout(()=>{
      const keys=console.log("🔑")
      console.log("here is our keys", keys)
      callback2(keys)
        }, 3000)
    }






    getCandies((candies)=>{
        handoverKeys(candies,(keys)=>{
            console.log("there is your keys and candies",keys);
            
        })
        console.log("here is your candy sir!", candies)
    })

    // FINALLY I HAVE UNDERSTOOD CALL BACK HELL THING.. 
