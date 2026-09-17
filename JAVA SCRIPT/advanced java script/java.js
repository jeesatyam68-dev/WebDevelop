// named function

function greet(){
    console.log("hello everyone!")
}
greet();

// anonymous  function 

let greet2=function(){
    console.log("hello everyone");
}

greet2()


// arrow function

let greet3=()=>{

    console.log("hello my kucchu pucchu!")
}
greet3();  

const greet4=(count)=>{
    console.log("hello everyone",count)
}
greet4(3)

// in arrow function we can also keep the function as simple as that for an example let's see

let bye=(num)=> num*num   //see how beautifully it wrote our code and it'll take less time in here to write our code 

console.log(bye(3));


// CALL BACK FUNCTIONS VVVV IMP FOR ME 

let call=(a,b, operation)=>{
    return operation(a,b);
}

console.log(call(2,75, function(a,b){
    return a+b
}))

//call back expression ka deep explanation deta hun... see   from now on we will always use arrow function so.. 
// like every normal function we assingend the value in function to which we will call so here  a&b are the function which we will use  but REMAINDER "OPERATION"
// is not any variable it's jut a method we can use  it's a logic!  and we will pass on a,b there;  console karenge normal.. usme function ke real name me value bhi assing karenge
// but since opeartion abbhi tak designed nahi hua hai ki woh hai kya.. toh hame opeartion ke liye ek function banana padega and woh ham log normal named function se bana lenge
// usme woh values assing kar denge jo  diya  hamne liya tha and for finally return kar denge  apna logic 


const square=(n,m, multiplication)=>{
    return multiplication(n,m);

}
console.log(square(78,78, function(n,m){
    return n*m;
}))


// let's use call back in array 

const arr=[2,5,89,75,56,46,827,-3,-4,-5]

const negativeNum=(numb)=>{
    return numb<0
}
console.log(arr.find(negativeNum))


arr.forEach((numb, index)=>{
console.log("ELEMENT: ",numb, "INDEX: ", index);

})

//yeh for.each method  jo hai na woh basically ek samjh lo for loop ka hi method hai 
// just yeh ek inbuilt method hai toh tumko for (i=0;i<9;i++) nahi karna padta 