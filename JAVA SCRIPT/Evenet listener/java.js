// 1. event handlers
// (onClick,onload,onmouseout,onkeypress,)

// function onclickfunc(){
//     console.log("BOX 1 WAS CLICKED ");
    
// }

// function mouseleaved(){
//     console.log("mouse was down");
    
// }

// function keydown(){
//     console.log("key was pressed down");
    
// }

// event listener

const box1=document.getElementById("box-1")
box1.addEventListener('click', ()=>{
    console.log("the box was clicked")
})

const box2=document.getElementById("box-2")

box2.addEventListener('click',()=>{
    console.log("box 2 was also clicked");
    
})


