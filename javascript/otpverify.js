let newotp = Math.floor(Math.random()*9999)
   alert(newotp)

   function verifyOTP() {
      let OTP = newotp
      let userotp = document.getElementById('verify').value
      if(OTP == userotp){
         window.location.href="./newpassword.html"
      }
      else{
         alert("incorect otp")
      }

      
   }