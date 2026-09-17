// here we will see callback function let's see this in action 

const calculation = (a,b, operation)=>{
 return operation(a,b)
}

const summation= calculation(2, 2,function(n1,n2){
    return n1+n2;
})
console.log(summation);
