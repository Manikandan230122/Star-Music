
function NewPassValidation(){
let userpass = document.getElementById('password').value 
let Strongpass = document.getElementById('c-password').value
let passwordFlag = false
let confirmpassFlag = false
    let Upper  = 0;
    let Lower  = 0;
    let Number = 0;
    let Symbol = 0;

    for (let index = 0; index < userpass.length; index++) {
        if ((userpass[index] >= 'A'  && userpass[index] <= 'Z') ) {
            Upper++
        }
        else if ((userpass[index] >= 'a'  && userpass[index] <= 'z') ) {
            Lower++
        }
        else if ((userpass[index] >= 0  && userpass[index] <= 9) ) {
            Number++
        }
        else{
            Symbol++
        }         
    }

    if((userpass.length>=8) && (userpass.length<=20) && (Upper>=1) && (Lower>=1) && (Number>=1) && (Symbol>=1)){
        passwordFlag = true
    }
    else{
        alert("Weak Password")
    }

    if(userpass==Strongpass){
    confirmpassFlag  = true
    }
    else{
        alert("Mismatched Password")
    }

    if((passwordFlag==true) && ( confirmpassFlag==true)){
        window.location.href="./login.html"
    }

}