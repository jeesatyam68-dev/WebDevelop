//  HERE WE WILL SEE TRY CATCH ERROR 

try {
    const a = 10;
    const b = 20;
    const C =

        console.log(b / c)  // it shows theer was an error in your code.. 


} catch {
    console.log("THERE WAS AN ERROR IN YOUR  CODE")

}

// The finally block 

try{
    let i= 10;
    let y= 30
    
    console.log(y/x)  //error aagya.. but yaah pe catch and finally dono print hua hai 
}catch{
    console.log("ERROR!")

}finally{
     console.log("THANKS FOR WRITTING THE CODE!")
}


// throwing custom errors 

 function divide(x, w){
    if(w===0){
        throw new Error(" cannot be divided by zero")
    }
    return x/w
 }
 try {
     console.log(divide(4, 1))
 } catch(error){
    console.log(error.message)
 }

