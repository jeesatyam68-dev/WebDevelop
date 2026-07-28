let marks= 82

if(marks>=40){
    if(marks>=75){
        console.log("DISTINCTION")
    }
    else if(marks>=60 && marks<75){
        console.log("First Division")
    }
    else{
        console.log("second division")
    }
    
}

else{
    console.log("FAIL")
}


// question 2.)

let Age= 18;
let nationality="Britsih";

if(Age>=18 ){
    if(nationality==="Indian"){
        console.log("Eligible Indian Voter")
    }
    else {
        console.log("Not an Indian Citizen")
    }
    

}
else{
    console.log("Too Young To Vote")
}



// question 4.)

let balance = 10000;
let withdraw = 3000;

if(withdraw<10000){
    console.log("Transaction successful")
    console.log("Remaining Balance:",balance-withdraw)
}
else{
    console.log("Insufficient Balance")
}


// question 5.)

let userAge=89;

if(userAge>=0 && userAge<=12){
    console.log("Child")
}
else if(userAge>=13 && userAge<=19){
    console.log("TeenAger")
}
else if(userAge>=20 && userAge<=59){
    console.log("Adult")
}
else{
    console.log("Senior Citizen")
}

// quest 6.)

let userMarks=88;

if(userMarks>=90){
    console.log("grade A")
}

else if(userMarks>=75 && userMarks<90){
    console.log("Grade B")
}
else if(userMarks>=60 && userMarks< 75){
    console.log("grade c")
}
else if(userMarks>=40 && userMarks<60){
    console.log("garde D")
}
else{
    console.log("garde F")
}


// 7.)

a = 15;
b = 20;
c = 10;

if(a>b && a>c){
    console.log(a,"is the greatest number")
}

else if(b>a&& b>c){
    console.log(b, "is the greatest number")
}

else{
    console.log(c, "is the greatest number")
}

//  question 8.)


let personAge=22;
let hasTicket= true;

if(personAge>=18){
    if(hasTicket===true){
        console.log("entery allowed")
    }
    else{
        console.log("entery denied")
    }
}
else{
    console.log("entry denied")
}


// question 9 

let account={
    name:"Satyam",
    balance: 25000,
    isActive: true,
}

if(account["balance"]>5000) {
    if(account["isActive"]===true){
        console.log("Transaction allowed")
    }
    else{
        console.log("Account blocked")
    }

}
else{
    console.log("Low balance")
}