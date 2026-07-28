// events are the action that is often triggers after the actions of the user  common example
// common example:-  1.)clicking a button 2.) mouse in & mouse-out 3.)submitting a form  4.)scrolling the page 


const firstSpan= document.getElementById("FirstSpan");
firstSpan.addEventListener('mouseover', ()=>{
    firstSpan.style.background="red"
});

firstSpan.addEventListener('mouseout',()=>{
    firstSpan.style.background="grey"
})

firstSpan.addEventListener('mouseover',()=>{
    firstSpan.style.color="purple"
})

// const box= document.querySelector(".box")
// box.style.backgroundColor= "red"
// box.style.fontSize="3em"


const box= document.getElementById("boxes");
box.addEventListener('click', ()=>{
    alert(`you clicked box`)
})

const word=document.getElementById("text");

word.addEventListener('keyup', (event)=>{
    alert(`you clicked ${event.key}`)
    console.log(event)
})

const button = document.getElementById("btn");
const result = document.getElementById("result");
const out = document.getElementById("out");

result.addEventListener('keyup', () => {
    

    button.addEventListener('click', () => {
        out.textContent = result.value;
    });

});





