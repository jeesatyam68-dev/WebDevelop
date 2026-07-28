// question 1

function checkNumber(a){
    if(a>0){
        console.log("Positive");
        
    }
    else if(a==0){
        console.log("Zero");
        
    }
    else{
        console.log("Negative");
        
    }
    return checkNumber;
}

checkNumber(0)


//  question 2

function isVoteEligible(b){
    if(b>=18){
       
        return "Eligible To Vote "

    }
    else{
        
        return "Not Elibile To Vote"
    }
    
}

console.log(isVoteEligible(19));

// question 3.)

function compare(c, d){
    if(c>d){
        return (c)
    }
    else{
        return (d)
    }
}

console.log(compare(10, 20),"is greater");

// question 4.)


function smallest(e,f,g){
    if(e<f && e<g){
        return e;
    }
    else if(f<e && f<g){
        return f;
    }
    else{
        return g;
    }
}
console.log(smallest(10,5,8))


// question 5:

function cheakLeapYear(i){
    if(i%4===0){
        return "Leap Year"
    }

    else if(i%100 && i%400===0){
        return "Leap Year"
    }

    else if(i%4===0 && i%100===!0){
        return "Leap Year"
    }
    else{
        return "Not Leap Year"
    }
}
console.log(cheakLeapYear(2024))



// question 6:- 

function monthName(h){
    if(h===1){
        console.log("January")
    }
    else if(h===2){
        console.log("February")
    }
    else if(h===3){
    console.log("March")}
    else if(h===4){
        console.log("april")
    }
    else if(h===5){
        console.log("may")
    }
    else if( h===6){
        console.log("june")
    }
    else if(h===7){
        console.log("july")
    }
    else if(h===8){
        console.log("august")
    }
    else if(h===9){
        console.log("september")
    }
    else if(h===10){
        console.log("october")
    }
    else if(h===11){
     console.log("november")
    }
    else if(h===12){
        console.log("december")
    }
    else{
        console.log("please enter numbers between 1--12")
    }

}

monthName(3)



// question 7

function tax(i1){
    if(i1<=300000){
        return "No Tax"
    }
    else if(i1>300000 && i1<=700000){
        return "Medium Tax"
    }

    else{
        return "High Tax"
    }

}
console.log(tax(30000))

// Question 8:- 

function triangle(x,y,z){
    let sum = x+y+z;
    if(sum===180){
        return "valid triangle"
    }
    else{
        return "Not Valid"
    }
    

}

console.log(triangle(60,60,60))

// Question 9.:-


function checkVowel(x2,x3,x4,x5,x6){
       if(x2==="a"||x3==="e"||x4==="i"||x5==="o"||x6==="u"){
        return "vowel"
       }
       else{
        return "consonant"
       }
}

console.log(checkVowel("a"))



// question 10:-


function checkTemprature(y1){
    if(y1<10){
        return "COLD"
    }
    else if (y1>=10 && y1<=25){
        return "NORMAL"
    }
    else {
        return "HOT"
    }
}
console.log(checkTemprature(10))

//  Question 11.

function sumOdd(y2){
    let sum= 0;
    for(y2=1;y2<10;y2=y2+2){
        sum=sum+y2
        
    }
    return sum; 
}
console.log(sumOdd(10));


// question 12.)


function sumEven(y3){
    let sum1=0;
    for(y3=2;y3<11;y3=y3+2){
        sum1=sum1+y3 ;
    }
    return sum1
}

console.log(sumEven(10));


// Question 13.)

function sumOdd(y4){

    let count=0;
    for(y4=1;y4<21;y4=y4+2){
        
        count++
    }
     return count
}

console.log(sumOdd(20))

// question 14.)

function multipleOfFive(x1){
    for(iy=1;iy<11;iy++){

     if(x1*iy===35){
        break;
     }        
        console.log(x1 + "X" + iy + "=" + x1*iy 
        )
        
    }
    
    
}

multipleOfFive(5)


// question 14.)


function allTables(x2){
    for(iz=1;iz<11;iz++){
        console.log(x2 +"X" + iz +"=" +  x2*iz)
    }
}
allTables(3);


// question 16.)


function reverseCount(numz){
    for(let i=numz; i>0;i--){
        console.log(i)
    }

}

reverseCount(10)


//  question 20
let count=0;
function countDivisibleBy3(k){
    for(alpha=1;alpha<=k;alpha++){
        if(alpha%3===0){
             count++
            
        }
    }
  return count
}
console.log(countDivisibleBy3(30))


