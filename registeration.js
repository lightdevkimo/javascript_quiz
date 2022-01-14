function GEEKFORGEEKS() {
    var name =
        document.forms["RegForm"]["Name"];
    var email =
        document.forms["RegForm"]["EMail"];
    var phone =
        document.forms["RegForm"]["Telephone"];

    var password =
        document.forms["RegForm"]["Password"];
    var confirmPassword =
        document.forms["RegForm"]["Confirm_Password"];
    var male =
        document.forms["RegForm"]["Gender"][0];
    var female =
        document.forms["RegForm"]["Gender"][1];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    } else {
        sessionStorage.Name = name.value
    }


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    } else {
        sessionStorage.Email = email.value

    }

    if (!password.value || password.value.length <= 8) {
        window.alert("Please enter your password");
        password.focus();
        return false;
    } else {
        sessionStorage.Password = password.value

    }
    if (confirmPassword.value != password.value) {
        window.alert(
            "passwords don't match");
        confirmPassword.focus();
        return false;
    }


    if (!(male.checked) && !(female.checked)) {
        alert("Please enter your gender");
        male.focus();
        return false;
    } else {
        if (male.checked) {
            let m = "male"
            sessionStorage.Gender = m;



        } else {
            let f = "female";
            sessionStorage.Gender = f;

        }
    }

    return true;
}