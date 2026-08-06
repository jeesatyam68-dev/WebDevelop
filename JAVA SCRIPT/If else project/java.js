let age;
document.getElementById("btn").onclick=function(){
    age= document.getElementById("label").value    
    age=Number(age)
  if(age>=18){
    console.log("you are eligibe to vote")
    document.getElementById("showcase").textContent=`You are eligible`

  }
  else{
    console.log("You are not");
    document.getElementById("showcase").textContent=`You are not eligible`
  }

}