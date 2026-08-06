let radius;
let area;
let circumenference;
const PI= 3.14159265359;


document.getElementById("button").onclick= function(){
    radius= document.getElementById("value").value; 
    radius=Number(radius);
    circumenference=  PI* radius*2;
    document.getElementById("myh2").textContent= circumenference + `cm`;



}

