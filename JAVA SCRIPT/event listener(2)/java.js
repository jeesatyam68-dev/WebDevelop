

const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");

box1.addEventListener('mouseenter', ()=>{
    box1.style.backgroundColor="grey"
});

box1.addEventListener('mouseleave',()=>{
    box1.style.backgroundColor="red"
})



box2.addEventListener('click', ()=>{
box2.textContent="You Clicked Box 2"
})

