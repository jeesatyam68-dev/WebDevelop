let attempt=0;


document.getElementById("btn").onclick=function(){
    attempt++;
    let random=Math.floor(Math.random()*6)+1

    document.getElementById("numbers").value=random

    switch(random){
        case 1:
            document.getElementById("images").src="image/dice 1.png"
            break;
        case 2:
            document.getElementById("images").src="image/dice 2.png"
        break;
        case 3:
            document.getElementById("images").src= "image/dice 3.png"
            break;
        case 4:
            document.getElementById("images").src= "image/dice 4.png"
            break;
        case 5:
            document.getElementById("images").src= "image/dice 5.webp"
            break;
        case 6:
            document.getElementById("images").src= "image/dice 6.webp"
            break;
    }
}