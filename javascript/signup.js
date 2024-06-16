
let userDetails = [];

function SignUpValidation(){

   let Username = document.getElementById('Username').value
   let Phone = document.getElementById('PhoneNumber').value
   let EmailId = document.getElementById('EmailId').value
   let NewPass = document.getElementById('NewPassword').value
   let ConfirmPass = document.getElementById('ConfirmPassword').value
   

      //    NAME VALIDATION
      // ++++++++++++++++++++++++++++++++++++
  
      let PhoneFlag = false 
      let UsernameFlag = false
      let MailIdFlag   = true
      let PasswordFlag = true

      // CountChecking for user name

      let [Upper, Lower, Number, Symbol] = CountChecking(Username)
      console.log(Upper, Lower, Number, Symbol);


      if( Upper == 0 && Lower >= 1 && Number >=1  &&  Symbol == 0 && ( Username.length>=8 &&  Username.length<=12) ){
         UsernameFlag=true
      }
      else{
         alert("InValid UserName")
      }

      // ================================
      // Validation for mobile number


      if(  Phone >= 6000000000 && Phone <= 9999999999){
            PhoneFlag = true
      }
      else{
         alert("Enter Valid Number")
      }


      // ================================
      // Validation for mailid


       [Upper, Lower, Number, Symbol] = CountChecking(EmailId)
      console.log(Upper, Lower, Number, Symbol);


      if( Upper == 0 && Lower >= 1 && Number >=1  && Symbol >= 1 && ( EmailId.length>=10 && EmailId.length<=30) ){
         MailIdFlag = true

      }
      else{
         alert("Enter Valid Mail id ")
         MailIdFlag = false
      }


// ===============================
// Validation for Newpassword


[Upper, Lower, Number, Symbol] = CountChecking(NewPass)
console.log(Upper, Lower, Number, Symbol);


if( Upper >=1 && Lower >= 1 && Number >=1  &&  Symbol >= 1 && ( NewPass.length>=8 && NewPass.length<=20) ){
   PasswordFlag = true

}
else{
   alert(" InValid Password ")
   PasswordFlag = false
}

//====================================
// validation for confirmpassword

if(NewPass==ConfirmPass){

}
else{
   alert("Mismatch Password")
   
}

   if(UsernameFlag==true && PhoneFlag==true && MailIdFlag==true && PasswordFlag==true){
      // using to store the user value in the userdetail array
      userDetails.push(Username,Phone,EmailId,NewPass)
      console.log("user:"+userDetails);
      window.location.href="./login.html"
   }
   else{
      alert("Invalid Details")
   }
}


function ForgotValidation(){
   let mobile = document.getElementById('Mobile').value
   userDetails.map((userDetail)  => {
         if (userDetails[1] == mobile  || userDetails[2] == mobile ) {
            console.log(""+userDetail);
            if (userDetails[1] == mobile) {
                  // let otps = generateOtp()
                  window.location.href="./otpverify.html"
            }
            else{
               console.log("mail id");
               // const otp = alert(Math.floor(Math.random()*9999))
               window.location.href="./otpverify.html"
               // const otp = alert("Through mail"+Math.floor(Math.random()*9999))
            }
        
         } 
         else{
            alert("wrong number")
         }
                 
      }
   )
}


   // verify otp verification
   // ====================================
   
   // let otp  =0;
   

            
//    function generateOtp(){
//       otp = alert("through number"+Math.floor(Math.random()*9999));

//       console.log("otp is"+otp);
//       return otp;
//   }




function CountChecking(value) {

   let Upper  = 0;
   let Lower  = 0;
   let Number = 0;
   let Symbol = 0;

   for (let index = 0; index < value.length; index++) {
      if ((value[index] >= 'A'  && value[index] <= 'Z') ) {
         Upper++
      }
      else if ((value[index] >= 'a'  && value[index] <= 'z') ) {
         Lower++
      }
      else if ((value[index] >= 0  && value[index] <= 9) ) {
         Number++
      }
      else{
         Symbol++
      }         
   }

   return [Upper, Lower, Number, Symbol];
}



