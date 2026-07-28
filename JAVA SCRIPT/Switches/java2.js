

document.getElementById("btn").onclick=function(){
    let day= document.getElementById("label").value;
    day=Number(day);
    


    switch(day){
        case 1:
            document.getElementById("showcase").textContent=`Monday`
            break;
        case 2:
            document.getElementById("showcase").textContent=`Tuesday`
            break;
        case 3:
            document.getElementById("showcase").textContent=`wednesday`
            break;
        case 4:
            document.getElementById("showcase").textContent=`Thursday`
            break;
        case 5:
            document.getElementById("showcase").textContent=`Friday`
            break;
        case 6:
            document.getElementById("showcase").textContent=`Saturday`
            break;
        case 7:
            document.getElementById("showcase").textContent=`Sunday`
            break;
        default:
            document.getElementById("showcase").textContent=`${day} doesn't comes between 1-7`
    }
}