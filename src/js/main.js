var activeQuestionId = 0;

var hideQuestion = function () {
    var activeQuestion = document.getElementById('question_' + activeQuestionId);
    if (activeQuestion) {
        activeQuestion.classList.remove('active');
    }
}

var askNextQuestion = function () {
    hideQuestion();

    // increment the active question
    activeQuestionId += 1;

    activeQuestion = document.getElementById('question_' + activeQuestionId);
    if (activeQuestion) {
        activeQuestion.classList.add('active');
    }
}

var showRecommendedAgents = function () {
    hideQuestion();

    var recommendedAgentList = document.getElementById('recommendedAgentList');
    recommendedAgentList.classList.remove('hidden');
}

var clearInput = function (inputId) {
    var polymerInput = document.getElementById(inputId);
    polymerInput.inputElement.value = '';
}

window.onload = function () {
    askNextQuestion();
}
