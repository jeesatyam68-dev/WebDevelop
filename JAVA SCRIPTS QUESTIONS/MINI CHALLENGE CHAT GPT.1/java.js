//  ques 1.)
let a= 10;
let b= 20;

console.log("a+b=", a+b); 


// question 2.)

let name= "satyam"

console.log(name);

// question 3.)

let num1 = 25;
let num2= "25";
let c= true;
let d= null;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof c);
console.log(typeof d)


// question 4

let x= 5;
x= x+3

console.log(x) //8

// question 5

let s= 15;
let t= 4;

console.log("s+t=", s+t);
console.log("s-t=", s-t);
console.log("s*t=", s*t);
console.log("s/t=", s/t);
console.log("s%t=", s%t);

//  question 6

console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");

// QUESTION 7.)

let num3= -25;

if(num3>0){
    console.log("positive number")
}
else{
    console.log("negative numer")
}


// question 8.)

let age= 18;

if(age>=18){
    console.log("eligible to vote")
}

else{
    console.log("not eligible to vote")
}

// question 9.)

let numa = 10001
    
if(numa=numa%2===0 ){
    console.log("number is even")
}
else{
    console.log("number is odd")
}


// question 10.)

let student = {
    name: "Satyam",
    age: 18,
    city: "Lucknow"
};
console.log(student["name"])
// question 11.)

student["college"]="HBTU"

console.log(student)


//  question 12.)

let car ={
    brand: "tyota",
    model: "fortuner",
    price: 3000000,
}

if(car["price"]>3000000){
    console.log("EXPENSIVE CAR")
}
else{
    console.log("AFFORDABLE CAR")
}

// MINI CHALLEGE

let name1= {
    name: "Satyam",
    age: 19,
    isStudent: true,
}

console.log("name:",name1["name"])
console.log("age:",name1["age"])
console.log("student:",name1["isStudent"])
