





const problem1 = document.getElementsByName("problem1")
const problem1answer = "green"


const problem2 = document.getElementsByName("problem2")
const problem2answer = "1"

function validateProblem1() {
    validate(document.getElementById("problem1_box"), problem1, problem1answer)
}
function validateProblem2() {
    validate(document.getElementById("problem2_box"), problem2, problem2answer)
}


function validate(problem_box, problem, rightAnswer) {
    var valid = false;
    var i = 0;
    while (!valid && i < problem.length) {
        
        if (problem[i].checked) {
            if (problem[i].value == rightAnswer) {
                valid = true
            }
        }
        i++;        
    }
    if (valid) {
        //alert("ok");
        //document.getElementById("problem1_box").style.backgroundColor = "#99bd85" //green
        problem_box.style.backgroundColor = "#99bd85" //green
    } else {
        //alert("ne ok")
        problem_box.style.backgroundColor = "#c45757" //red
    }

}