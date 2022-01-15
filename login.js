function Login() {

    var email =
        document.forms["Reg"]["EM"];


    var password =
        document.forms["Reg"]["pass"];
    console.log(sessionStorage.Email)

    if (email.value != sessionStorage.Email) {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (password.value != sessionStorage.Password) {
        window.alert("Please enter correct password");
        password.focus();
        return false;
    }
    return true;
}