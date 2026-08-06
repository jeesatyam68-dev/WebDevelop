
document.getElementById("btn").onclick=function(){
    let input=document.getElementById("output").value;
    if(document.getElementById("select").checked){
        let result= (input*9/5)+32+`°F`
        document.getElementById("labelling").textContent=result;
    }
    else if(document.getElementById("choose").checked){
        let uttar= (input-32)*5/9+`°C`
        document.getElementById("labelling").textContent= uttar;
    }
    else{
        document.getElementById("labelling").textContent=`please enter the valid number`
    }
}

