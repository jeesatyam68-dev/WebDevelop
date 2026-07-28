// Question 1.)



let name= "satyam"
console.log(name)


// question 2.)


let age= 18;

console.log(`Iam ${age} year old`)

// question 3.)

let city= "lucknow";
let state= "Uttar Pradesh"

console.log(`${city}, ${state}`)

// question 4.)

let score= 10;

let intermediate = score +5;

let final_score= intermediate *2

console.log(final_score);


// question 5.


const PI= 3.14159;
let radius= 5

area= PI*radius**2

console.log(`${area}`)


// question 6

let num1= 12;
let num2= 8;

let sum= num1+num2;

console.log(sum)

// question 7


let num3= 45
let num4=17

let difference=  num3-num4 
console.log(difference)


// question 8.)

let x=9
let y=7

let product = x*y

console.log(product)

// question 9.)

let a= 100
let b= 4

let division = a/b

console.log(division)

// question 10 

let pi= 17
let chi=5;

let remainder= pi%chi 

console.log(remainder)

// question 11

let power= 2
let operator= 2**5

console.log(operator)


// question 12.)

// let naam=window.prompt("what is your name?")

// console.log(naam)

// QUESTION 13.)


// let z= window.prompt("what is your age?")
// console.log(z)


// question 14) 

document.getElementById("btn").onclick=function(){
    let number1= document.getElementById("num1").value
    let number2= document.getElementById("num2").value
    number1=Number(number1)
    number2=Number(number2)
    sum= number1+number2
    document.getElementById("result").textContent=sum;

}


// question 15.)

document.getElementById("output").onclick=function(){
    const PI= 3.14159265359;
    let radius= document.getElementById("radius").value
    radius=Number(radius);
     area=  PI * radius*radius 
    document.getElementById("parimar").textContent=area;

}

// question 16.)

document.getElementById("outcontent").onclick=function(){
    let celcius= document.getElementById("conversion").value;
    celcius=Number(celcius);
    farenheight= (celcius*1.8)+32
    document.getElementById("AKGEC").textContent=farenheight+ `F`;
}


// question 17.)

let numera ="25"

numera=Number(numera)

outnumera=numera + 5
console.log(outnumera)

// question 18.)

let number3= 100;

number3= String(number3)

console.log(typeof number3)

// question 20
// let number4= window.prompt("enter a number:");

// number4=Number(number4)

// square1= number4**2

// console.log(square1);

// question 22

function converter(k=""){
    if(k=="a"){
        k=Number(k="");
        return k
    }
    else{
        return "Invalid Input"
    }
}

console.log(converter(k="4567"))

// IDK GALAT HAI YEH 




//  Real life project making a counter type part (done in next file )


// question 23

const country= "India";

console.log(country)

// question 24.)

const DAYS_IN_WEEK= 7;

console.log(DAYS_IN_WEEK)

// question 25.)

const PIe= 3.145973

// PI= 10;

console.log(PIe);