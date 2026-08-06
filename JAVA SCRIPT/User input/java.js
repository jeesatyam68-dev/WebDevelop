name;

document.getElementById("result").onclick= function(){
    name= document.getElementById("My username").value;
    document.getElementById("insert").textContent= `WELCOME ${name}`;
    console.log(name);

}

