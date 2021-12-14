const problem1 = document.getElementsByName("problem1")
var problem1answer = "green"

const problem2 = document.getElementsByName("problem2")
var problem2answer = "whatever"


function updateResults() {
    if (localStorage.getItem("currentScore") != null) {
        document.getElementById("currentScore").innerHTML = localStorage.getItem("currentScore")
    } else {
        document.getElementById("currentScore").innerHTML = "0"
        localStorage.setItem("currentScore", "0")
    }

    if (localStorage.getItem("lastScore") != null) {
        document.getElementById("lastScore").innerHTML = localStorage.getItem("lastScore")
    } else {
        document.getElementById("lastScore").innerHTML = "0"
        localStorage.setItem("lastScore", "0")
    }

    if (localStorage.getItem("lastScore") <= localStorage.getItem("currentScore")) {
        document.getElementById("scores").style.backgroundColor = "#99bd85" //green
    } else {
        document.getElementById("scores").style.backgroundColor = "#c45757" //red
    }
}

function validate() {

    var score = 0;
    score = score + validateProblem(problem1, problem1answer);
    score = score + validateProblem(problem2, problem2answer);
    localStorage.setItem("lastScore", localStorage.getItem("currentScore"))
    localStorage.setItem("currentScore", String(score))
    updateResults()

}

function validateProblem(problem, answer) {
    var valid = false
    var i = 0;
    while (!valid && i < problem.length) {
        if (problem[i].checked) {
            if (problem[i].value == answer) {
                valid = true
            }
        }
        i++;    
    }

    if (valid) {
        return 1;
    } else {
        return 0;
    }
    
}