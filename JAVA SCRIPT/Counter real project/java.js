const decrease = window.getElementById("decrease btn");
const reset= window.getElementById("reset btn");
const increase= window.getElementById("reset btn");

const label= window.getElementById("label");
let count=0;

decrease.onclick= function(){
    count--;
    label.textContent=count;
}


// IDK IT DOESN'T WORKS 