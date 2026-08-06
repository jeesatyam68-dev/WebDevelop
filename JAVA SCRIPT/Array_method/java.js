let students=["Simon Riley", "Captain price", "soap", "gaz", "Alejandro Vargas"]


// push(  It's used to push any element at last of the array)

// students.push("soap")
console.log(students) //soap pushed at last 
// students.pop()// alejandro  vargas removed from last 
// students.shift()//simon riley got removed 

students.unshift("satyam")//added new element to the array
console.log(students)

console.log("loops") //LOOPS STARTED

for(let i=0;i<students.length;i++){
    console.log(students[i])
}

//  MAP 
let arr=[1,2,3,4]
 function  square(a){
    return a*a
 }

 let newArr= arr.map(square)
 console.log(newArr);


//
let num=[5,6,7,8,9]
function triple(b){
    return b*b*b
}  
let newbr=num.map(triple)
console.log(newbr)


// filter is used to filter out numbers or strings in array 

let scores=[21,25,28,29,30,35,55,100]

function pass(b){
    if(b>=30){
        return true 
    }
    else{
        return false 
    }
}

console.log(scores.filter(pass))


