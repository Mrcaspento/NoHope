///GLOBAL VARS
var timerEl = document.getElementById('timer');//timer element
var contentEl = document.getElementById('content');
var button = document.getElementById('choices');

//--------------------------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------------------------------
//The Timer and quiz start functions!!!

var timerEl = (function (document) {
    var myTimer;
    function start() {
        myTimer = setInterval(myClock, 1000);
        var c = 60;

        function myClock() {
            document.getElementById("timerNumber").innerHTML = --c;
            if (c == 0) {
                clearInterval(myTimer);
                alert("Reached zero");
            }
        }
    }
    function end() {
        clearInterval(myTimer)
    }
    return { start: start, end: end };
})(document);

//--------------------------------------------------------------------------------------------------------------------------------

var questions = [
    {
        question: "placeholder question?",
        choices: [
             "Placeholder answer",
             "Placeholder answer",
             "Placeholder answer",
             "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answerIndex: 0 /// the correct answer
    },]





    function populateQuestionContainer() {
        currentQuestionIndex++;
        displayQuestion();
        //determine correct/incorrect
    }


    var currentQuestionIndex = 0;
    

    function displayQuestion(){
        var currentQuestion = questions[currentQuestionIndex];
        currentQuestion.answerIndex;
        element.insertAdjacentHTML(populateQuestionContainer,"currentQuestion");

        for( var i = 0; i <currentQuestion.choices.length; i++){
            var choices = document.createElement("span") 
            choices.setAttribute("id", i);
        }
        //display the question
        //display the choices
        
    }

 //choices.addEventListener("click",answerChosen);


//-------------------------------------

//question.prototype.correctAnswer = function (choice) {
//    return choice === this.answer;
//}
////--------------------------------------
//function quiz(questions) {
//    this.score = 0;
//    this.questions = questions;
//    this.questionIndex = 0;
//}
//question.prototype.correctAnswer = function (choice) {
//    return choice === this.answer;
//}
//quiz.prototype.getQuestion = function () {
//    return this.questions[this.questionIndex];
//}
//quiz.prototype.isDone = function () {
//    return this.questions.length === this.questionIndex;
//}
//quiz.prototype.guess = function (answer) {
//    this.questionIndex++;
//
//    if (this.getQuestionIndex().correctAnswer(answer)) {
//        this.score++;
//    }
//}
//