// Question 1.)

let count=0;

for(i=1;i<=100;i++)
    if(i%5===0){
        count++

    }
    console.log(count)


    // question 2.)

    function checkEvenOdd(a){
        if(a%2===0){
            return "EVEN"
        }
        else{
            return "ODD"
        }
    }

    console.log(checkEvenOdd(356))

    // question 3.)

    let arr=[12,5,8,20,3,15]
    let sum=0;
    for(z=0; z<arr.length;z++){
        if(arr[z]>10){
            sum=sum+arr[z]
        }
    }

    console.log(sum)


    // Question 4.)

    let student={
        name: "satyam",
        age:  19,
        branch: "CSIT",
    }

    console.log(student["name"], "studies in", student["branch"])

    // question 5.)

let ar=[45,12,89,23,67]
let max=0;
// ek array hai  usme kucch element hai unko kaise dekkhu ki kon sabse bada hai 

for(let x=0;x<ar.length;x++){
    if(ar[x]>max){
        max=ar[x]
    }
}
console.log(max);

    


    



