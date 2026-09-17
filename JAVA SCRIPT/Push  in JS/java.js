let arr=["ABC", 123, 456, "AKGEC", "SHUATS"]
console.log(arr)

//push:- isse we can add something at the end of the array;

// Lt's see  it 

arr.push("HELLO")
console.log(arr)

// now what if you want smh at teh start of an array 

arr.unshift("Kya hai")
console.log(arr);

//last element ko hatana hoga toh kya kare?? use POP

arr.pop()
console.log(arr)

// Now what if we have to remove first   element we'll use shift()

arr.shift();
console.log(arr)

// let's make a new arr to understand assending part 

let newArr=[1,2,78,99,56,75,5372,927354,638292,937454]
// newArr.sort()
// console.log(newArr)

// now let's suppose ki we want ki hamme kucch set tak hi data chahiey 
// how will we do that ? will use slice method 

let subMarks=newArr.slice(2,7) //isme kya hota  hai ki 1st  element jo tum likkh arhe ho woh toh rahega but last wala nahi rahega like jo index 7  pe hoga woh included nahi hoga 
console.log(subMarks) //see ho gaya 

