function submission(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let gender = document.querySelector("input[name=gender]:checked").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cnfmPassword").value;
    phoneNumberCheck(phoneNumber);
    passwordCheck(password,confirmPassword);
}
 function phoneNumberCheck(number){
     if(number.length<10){
         alert("less than 10 digit");
         return false;
     }
 }


 function passwordCheck(password,confirmPassword){
     if(password!==confirmPassword){
         alert("password is not same");
         return false;
     }

 }