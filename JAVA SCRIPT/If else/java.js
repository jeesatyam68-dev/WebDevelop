let a= 15;

if(a>18|| a<15){
    console.log("you are not eligible for NDA");
}

else{
    console.log("you are eligible for NDA");
}

// else if ladder

let userName = "FARAH";

if(userName==="GHOST"){
    console.log("you are in team SAS")
}
else if(userName==="CAPTAIN PRICE"){
    console.log("you are in team SAS");
}
else if(userName==="GAZ"){
    console.log("you are in team SAS");
}
else if(userName==="SOAP"){
    console.log("you are in team SAS");
}
else if(userName==="FARAH"){
    console.log("you are in team BRAVO")
}
else if(userName==="NIKITO"){
    console.log("you are in team SPETSNAZ")
}
else{
    console.log("you are not in any operation ROOKIE, TRAIN HARD")
}


// 3. let's do some example based on nested if-else statement

let age="19"
let marks="55"

if(age>="18"){
    if(marks>="90"){
        console.log("you are in SPECIAL FORCE")
    }
    else if(marks>="75" && marks<"90")
        console.log("you are in INFANTRY")
    else if(marks>="60" && marks<"75"){
        console.log(" you are in SUPPORT UNIT")
    }
    else{
        console.log("YOU ARE REJECTED SOLDIER, BETTER LUCK NEXT TIME")
    }
}
else{
    console.log("YOU ARE NOT ELIGIBLE FUTURE ROOKIE, TURN ATLEAST 18, WE LOOK FORWARD TO YOU")
}

// let's try short hand method

let isMessage= false;  // yaha I created it a tring at first place
let result= isMessage ? "true":"false";

console.log(result);
