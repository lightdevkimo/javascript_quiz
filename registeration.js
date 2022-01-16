function Validation() {

    var name =
        document.forms["Register"]["Name"];
    var email =
        document.forms["Register"]["Email"];

    var password =
        document.forms["Register"]["Password"];
    var confirmPassword =
        document.forms["Register"]["Confirm_Password"];
    var male =
        document.forms["Register"]["Gender"][0];
    var female =
        document.forms["Register"]["Gender"][1];

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

/*if(Validation()){
    window.location.assign("./login.html")
}*/