function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
var passValComment = "";
function checkPasswords() {
    var pass = String(document.myForm.password.value);
    var passRep = String(document.myForm.repeatPassword.value);
    var valid =true;
    passValComment ="";
    if (pass.length < 6) {
       valid = false;
       passValComment = passValComment + "Должно быть минимум 6 символов. "
    }
    if(pass != passRep) {
        valid = false;
        passValComment = passValComment + "Пароли должны совпадать"
    }
    if (valid) {
        document.getElementById("checkbox").style.opacity = "1";
        document.getElementById("repeatPassword").style.backgroundColor = "#99bd85";
        document.getElementById("password").style.backgroundColor = "#99bd85";
    }
    else {
        document.getElementById("checkbox").style.opacity = "0";  
        document.getElementById("repeatPassword").style.backgroundColor = "#c45757";
        document.getElementById("password").style.backgroundColor = "#c45757";
    }
    document.getElementById("passValComment").innerHTML = passValComment;  

}