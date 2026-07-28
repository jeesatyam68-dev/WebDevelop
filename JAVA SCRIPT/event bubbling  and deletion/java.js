const child=document.getElementById("child");
const parent=document.getElementById("parent");

child.addEventListener('click', ()=>{
    console.log("child clicked")
})

parent.addEventListener('click',()=>{
    console.log("parent clicked")
})

// now here as we click the  click me button the parent will also get automatically clicked 
// it's like  ki box ke andar box hai agar andar waale box ko touch kare toh bahar wal box bhi automatically touch ho hi jayega 

// ISKO  KEHTE HAI EVENT BUBBLING AND ISKO ROOKNE KE LIYE WE USE "stopPropagation()"

// LET'S SEE EVENT DELEGATION NOW 

const box1=document.getElementById("box1");
const box2= document.getElementById("box2");
const box3=document.getElementById("box3");
const box4=document.getElementById("box4");
const BOX= document.getElementById("BOX");

// box1.addEventListener('click', (event)=>{
//     console.log("box1 was clicked")
//     event.stopPropagation()
// })

// box2.addEventListener('click', (event)=>{
//     console.log("box 2 was clicked ")
//     event.stopPropagation()
// })

// box3.addEventListener("click", (event)=>{
//     console.log("box 3 was clicked")
//     event.stopPropagation()
// })

// box4.addEventListener("click", (event)=>{
//     console.log("box 4 was clicked")
//     event.stopPropagation()
// })

// BOX.addEventListener("click", (event)=>{
//     console.log("container clicked")   // here container will always be clicked so to stop it we will use event propagator 
//     event.stopPropagation()
// })


// AB ISKO KARNE KA SABSEE SIMPLE TAREEKA THAA.. KAISEE???
document.getElementById("BOX").addEventListener("click", (event)=>{
    event.textContent="HELLO"
    
    console.log(event.textContent)
    
})



