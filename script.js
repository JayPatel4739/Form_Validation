var errormessage = "";
var missingval = "";function isEmail(email) {
var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
return regex.test(email);
};

$("#submitbut").click(function () {
// Reset messages on each click
errormessage = "";
missingval = "";


// Email validation
var email = $("#Email").val();
if (email == "") {
    missingval += "<p>Email is Not Added</p>";
    console.log("email is not added");
} else if (!isEmail(email)) {
    errormessage += "<p>Email is not valid</p>";
    console.log("email is not valid");
}

// Password validation
var password = $("#password").val();
var confirmPass = $("#confirmpass").val();
if (password == "") {
    missingval += "<p>Password is Not Added</p>";
    console.log("password is not added");
} else if (password !== confirmPass) {
    errormessage += "<p>Passwords Don't Match</p>";
    console.log("passwords do not match");
}

// Phone number validation
var phone = $("#PhoneNo").val();
if (phone == "") {
    missingval += "<p>Phone Number is not added</p>";
    console.log("phone number is not added");
} else if (!$.isNumeric(phone)) {
    errormessage += "<p>Phone Number is not valid</p>";
    console.log("phone number is not valid");
}
if (missingval === "" && errormessage === "") {
$("#success").html("You're Registered!");
$("#errors").html("");
console.log("You're Registered");
} else {
$("#errors").html(errormessage + missingval);
$("#success").html("");
console.log(errormessage + missingval);
}
});

