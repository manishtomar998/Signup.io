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
    passwordCheck(password, confirmPassword);
    alert("Form submitted");
}
function phoneNumberCheck(number) {
    if (number.length < 10) {
        document.getElementById("numValid").style.display = "block";
        return false;
    }
}


function passwordCheck(password, confirmPassword) {
    if (password !== confirmPassword) {
        document.getElementById("passValid").style.display = "block";
        return false;
    }

}

function passValueEnter() {
    document.getElementById("passValid").style.display = "none";
}

function numValueEnter() {
    document.getElementById("numValid").style.display = "none";
}