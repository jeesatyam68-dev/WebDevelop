setInterval(()=>{
console.log("My Self Satyam!")

}, 3000 )  //setInterval is like a loop thing which will continue  and goes on and on and on

// SET TIME OUT 
setTimeout(()=>{
    console.log("Myself satyam!")
}, 3000)  // yeh code  ko sirf ek baar hi repeat karta hai..

// We can use clear timeout to clear  a time out like for exampke 

const timeOutId= setTimeout(()=>{
    console.log("BJP HATTI, LULLI KATTI!")
})

clearTimeout(timeOutId) // isse mera timoput remove ho gaya .. 

//  now we can remove interval too

const timeId=setInterval(()=>{
    clearInterval(timeId)
    console.log("I STUDY IN AKGEC!")

},3000)


