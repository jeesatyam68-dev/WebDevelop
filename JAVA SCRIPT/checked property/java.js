// checked property:   property that determines  the checked  state of an  HTML checkbox
                    // or  radio button element 




document.getElementById("btn").onclick=function(){

if ( document.getElementById("subscribed").checked){
    document.getElementById("label").textContent= `You Are Subscribed`

if(document.getElementById("masterBtn").checked){
    document.getElementById("selected").textContent=`You Are Paying By Master Card`
    }
    else if(document.getElementById("debitCard").checked){
        document.getElementById("selected").textContent=`You Are Paying By Debit Card`

    }
    else if (document.getElementById("creditCard").checked){
        document.getElementById("selected").textContent=`You Are Paying By Credit Card`

    }
    else{
        document.getElementById("selected").textContent=`Please Select Payment method`

    }
}

else{
    document.getElementById("label").textContent=`You Have Not Subscribed Yet!`

    }




}