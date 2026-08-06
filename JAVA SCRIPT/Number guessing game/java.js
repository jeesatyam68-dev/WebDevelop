const min= 60;
const max= 100;

const random= Math.floor(Math.random()*(max-min+1))+min
let guess;

 let count=0;
 let running=true;

while(running){
    guess= window.prompt(`Enter a number between ${min}-${max}`)
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please write a valid number")
    }
    else if(guess>max || guess<min){
        window.alert("The number is invalid")
    }
    else{
        count++
        if(guess>random){
            window.alert("Value is too high")
        }
        else if(guess<random){
            window.alert("value is  too low")
        }
        else{
            window.alert(`You guessed the correct answer!.. this took you ${count} attempts`)
            running=false;
        }
    }
    

}
