function identify(a){
    if(a%2===0){
        return `${a} is an even number`
    }
    else{
        return `${a} is a odd number`
    }
}

console.log(identify(2))


// Question 2

function bigger(b, c, d){
    if(b>c && b>d){
        return `${b} is the greatest`
    }

    else if(c>b && c>d){
        return `${c} is the greatest number`
    }

    else{
        return `${d} is the greatest number`
    }
}

console.log(bigger(2, 3, 5));

// Question 3..

for(let i=1; i<51;i++){
    if(i%2===0){
        console.log(i)
    }
}


// question 4.) 


function sum(maxNumber){
let add=0;

for(let j=1;j<maxNumber;j++){
    add=add+j;
    console.log(add)

}
}
sum(101)

// question 5.)

let greet= "hello"
let ulta= ""

for(let I=greet.length-1; I>=0; I--){
ulta=ulta+greet[I]
}
console.log(ulta)

// question 6.)

let word= "programming"
let count= 0;

for(let z=0; z<word.length;z++ ){
    if(word[z]==="a"||word[z]==="e"||word[z]==="i"||word[z]==="o"||word[z]==="u"){
        count++
    }
}
console.log(count)


// QUESTION 7 

let date = new Date();
console.log(date)








