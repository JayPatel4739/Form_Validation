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

$(document).ready(function () {
  $(".toggle-password").click(function () {
    const inputId = $(this).data("target");
    const input = $("#" + inputId);
    const type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);
    $(this).toggleClass("fa-eye fa-eye-slash");
  });

  $("#submitbut").click(function () {
    let errormessage = "";
    let missingval = "";

    const email = $("#Email").val().trim();
    const phone = $("#PhoneNo").val().trim();
    const password = $("#password").val();
    const confirmPass = $("#confirmpass").val();

    if (email === "") {
      missingval += "<p>Email is not added.</p>";
    } else if (!isEmail(email)) {
      errormessage += "<p>Email is not valid.</p>";
    }

    if (phone === "") {
      missingval += "<p>Phone number is not added.</p>";
    } else if (!isValidPhone(phone)) {
      errormessage += "<p>Phone number must be exactly 10 digits.</p>";
    }

    if (password === "") {
      missingval += "<p>Password is not added.</p>";
    } else if (!isStrongPassword(password)) {
      errormessage += "<p>Password must be 8-15 characters, include 1 uppercase, 1 lowercase, and 1 special character.</p>";
    } else if (password !== confirmPass) {
      errormessage += "<p>Passwords do not match.</p>";
    }

    if (missingval === "" && errormessage === "") {
      $("#success").html("You're Registered!").fadeIn();
      $("#errors").html("").hide();
    } else {
      $("#errors").html(errormessage + missingval).fadeIn();
      $("#success").html("").hide();
    }
  });
});
