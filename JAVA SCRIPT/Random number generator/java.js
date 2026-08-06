//  ok so to randomly generate the numbers we use property of MATH

//  (Math.random()*max)+min   This generate random number  now if you don't want ki number jo hai woh points me aaye tab 
// Math.floor(Math.random()*max)+min  now agar kisi particula range me chahiye tab
//   | Formula                                             | Output                           |
// | --------------------------------------------------- | -------------------------------- |
// | `Math.floor(Math.random() * (max - min + 1)) + min` | **min to max (both included)** ✅ |
// | `Math.floor(Math.random() * (max - min)) + min`     | **min included, max excluded**   |


//             LET'S GENERATE OUR RANDOM GENERATOR

document.getElementById("btn").onclick=function(){
    let result=Math.floor(Math.random()*6)+1;
    document.getElementById("label").textContent= result;
}

 