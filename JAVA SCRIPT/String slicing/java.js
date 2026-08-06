let userName= "Satyam Upadhyay"

// // let firstName= userName.slice(0, 5) // see "m" end at number index of 5 but in console.log "m" is not there  that's why we do +1
// let firstName=userName.slice(0, 6)

// let endName= userName.slice(-9)  //we do also caluculate the gap in between 


// console.log(firstName)
// console.log(endName)



// now let's say  we don't want to  count the index of string 

let firstName= userName.slice(0, userName.indexOf(" "))
console.log(firstName)

let lastName= userName.slice(userName.indexOf(" ")+1)
console.log(lastName)



let email="jeesatyam@gmail.com"

username= email.slice(0, email.indexOf("@"))

console.log(username)

console.log(email.slice(email.indexOf("@")+1))



