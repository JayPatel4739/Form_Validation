;var errormessage = "";
var missingval = "";

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isStrongPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/;
    return regex.test(password);
}

function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
}

$("#submitbut").click(function () {
    // Reset messages
    errormessage = "";
    missingval = "";

    // Email validation
    var email = $("#Email").val();
    if (email === "") {
        missingval += "<p>Email is Not Added</p>";
    } else if (!isEmail(email)) {
        errormessage += "<p>Email is not valid</p>";
    }

    // Password validation
    var password = $("#password").val();
    var confirmPass = $("#confirmpass").val();
    if (password === "") {
        missingval += "<p>Password is Not Added</p>";
    } else if (!isStrongPassword(password)) {
        errormessage += "<p>Password must be 8-15 characters, include 1 uppercase, 1 lowercase, and 1 special character</p>";
    } else if (password !== confirmPass) {
        errormessage += "<p>Passwords Don't Match</p>";
    }

    // Phone number validation
    var phone = $("#PhoneNo").val();
    if (phone === "") {
        missingval += "<p>Phone Number is not added</p>";
    } else if (!isValidPhone(phone)) {
        errormessage += "<p>Phone Number must be exactly 10 digits</p>";
    }

    // Output result
    if (missingval === "" && errormessage === "") {
        $("#success").html("You're Registered!");
        $("#errors").html("");
    } else {
        $("#errors").html(errormessage + missingval);
        $("#success").html("");
    }
});
