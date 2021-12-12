var form = document.getElementById("regForm");


function submitLogin() {
    //alert("a")
    var login = String(document.getElementById("login").value);
    var password = String(document.getElementById("password").value);
    //alert(login + password);
    
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
}
function tryToLogin() {


    var login = localStorage.getItem("login");
    var password = localStorage.getItem("password");
    
    document.getElementById("login").value = login;
    document.getElementById("password").value = password;
    if (login != null) {
        document.getElementById("hello").innerHTML = "Привет, " + login;
    }
}

