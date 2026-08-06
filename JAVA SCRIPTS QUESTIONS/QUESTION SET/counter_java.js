let count=0

document.getElementById("decrease").onclick=function(){
    // let count=0;
    count--;
     document.getElementById("display").textContent=count;
}



document.getElementById("increase").onclick=function(){
    // let count=0;
    count++;
     document.getElementById("display").textContent=count;
}

document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("display").textContent=count;
}