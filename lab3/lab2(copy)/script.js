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
    }
    else {
        document.getElementById("checkbox").style.opacity = "0";  
    }
    document.getElementById("passValComment").innerHTML = passValComment;  

}