let number=[1, 2, 3, 5172637228, 27363527829,5367894,765432,245678]

console.log(Math.max(...number))

let userName= "Satyam Upadhyay"
outcome= [...userName].join("-")
console.log(outcome);


let fruits= ["apple", "banana", "strawberry", "mango","litchi"]
let vegetable=["potato", "cabbage", "ladyfinger", "spinach", "broccoli"]

console.log(...fruits, ...vegetable, "satyam","shivam")


// so this wall all about the spread function  this is a inbuilt function of the java script 


//  REST PARAMETER 

const food1="pizza"
const food2="chips"
const food3="maggi"
const food4="biryani"
const food5="ramen"

function openFridge(...foods){
    console.log(foods)

}

openFridge(food1,food2,food3,food4,food5)

// see they all are now into an array 




