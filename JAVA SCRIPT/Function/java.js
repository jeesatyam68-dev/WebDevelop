// Function declaration


function greet(){
    console.log("hello,Jarvis")
    // return greet()
}

greet()

//   Function with Parameter


        function greet(username) {
            console.log("Hello ", username);

        }
        greet("SATYAM")


//  function with return value

 function add(a, b){
    let x= a+b;
    return x;
    
 }
 console.log(add(2, 10))

//  let's see example with multiplication 

function power(a){
    let x= a**2;

    return x
}

console.log(power(2));


// we'll know about anonymous fuction now

let multiplication=function (i, j){
    result= i*j;
    return result
}
console.log(multiplication(5, 3)) //that's how an anonymous function works 


// nested function :-
function addSquare(x, y){
    function squares(num){
        return num*num
    }
    console.log(squares(2))
}
addSquare(2,1)