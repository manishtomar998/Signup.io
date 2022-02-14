function submission(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let gender = document.querySelector("input[name=gender]:checked").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cnfmPassword").value;
    console.log(fullName, gender, email, phoneNumber, username, password, confirmPassword);

}