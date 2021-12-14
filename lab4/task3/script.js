var form = document.getElementById("regForm");

function writeCookie(key, value) {
    document.cookie = key + "=" + value +"; expires=01/01/2030 00:00:00";
}
function readCookie(key) {
    key = key;
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(key) != -1) {
            var value = cookies[i].substring(key.length + 1);
            
            return value;
        }
    }
}


function submitLogin() {
    //alert("a")
    var login = String(document.getElementById("login").value);
    var password = String(document.getElementById("password").value);
    //alert(login + password);
    writeCookie("login", login);
    writeCookie("password", password);
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
}
function tryToLogin() {


    var login = readCookie("login");
    var password = readCookie("password");
    
    document.getElementById("login").value = login;
    document.getElementById("password").value = password;
    document.getElementById("hello").innerHTML = "Привет, " + login;
}

