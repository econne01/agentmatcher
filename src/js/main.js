var activeQuestionId = 0;
var askNextQuestion = function () {
    var activeQuestion = document.getElementById('question_' + activeQuestionId);
    if (activeQuestion) {
        activeQuestion.classList.remove('active');
    }

    // increment the active question
    activeQuestionId += 1;

    activeQuestion = document.getElementById('question_' + activeQuestionId);
    if (activeQuestion) {
        activeQuestion.classList.add('active');
    }
}

var clearInput = function (inputId) {
    var polymerInput = document.getElementById(inputId);
    polymerInput.inputElement.value = '';
}

window.onload = function () {
    askNextQuestion();
}
