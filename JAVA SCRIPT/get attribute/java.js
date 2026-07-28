 document.getElementById("btn").onclick=function(){
 
    let image=document.getElementById("pic");
    image.classList.toggle("pici");
    if(image.classList.contains("pici")){
        document.getElementById("btn").textContent="REMOVE BLUE"
    }
    else{
        document.getElementById("btn").textContent="ADD BLUE"
    }
 }


