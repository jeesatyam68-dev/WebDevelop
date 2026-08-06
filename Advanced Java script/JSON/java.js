// document.getElementById("FORM").addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log("form submitted")

// })



document.getElementById("btn").onclick=function(e)  {
    e.preventDefault()
  const VALUE=document.getElementById("name").value;
  localStorage.setItem('name', VALUE);
}



document.getElementById("submit").onclick= function(event){
    event.preventDefault()
    const NAME= document.getElementById("NAME").value 
    localStorage.setItem('result', NAME)
    
    let clear= localStorage.getItem('result')
    console.log(clear)
}

// how to store object?? we need to use JSON PARSIN AND STRINGIFY 

const user ={
    name: "Satyam",
    age: 20,
    college: "AKGEC",
    city:"Ghaziabad",
}

localStorage.setItem('user', JSON.stringify(user))

console.log(JSON.parse(localStorage.getItem('user')))

