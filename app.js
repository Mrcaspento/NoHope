///GLOBAL VARS
var timerEl = document.getElementById('timer');//timer element
var contentEl = document.getElementById('content');
const startButton = document.getElementById('startBtn') 
startButton.addEventListener('click', startGame,)
const quizContainer = document.getElementById('quiz-Container')
const answerBtnEL = document.getElementById('choiceBtn')
let randomQuestions, currentQuestionIndex;
const questionEl = document.getElementById('question')



//--------------------------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------------------------------
//The Timer and quiz start functions!!!

function startGame(){
    startButton.classList.add('hide');
    quizContainer.classList.remove("hide");

    currentQuestionIndex = 0;
    randomQuestions = questions.sort(() => Math.random() - .5);
    
    displayQuestion();
}
function displayNextQuestion(){
    showQuestion(randomQuestions[currentQuestionIndex])
}
function displayQuestion(question) {
    questionEl.innerText = question.question
}

//function displayNextQuestion(question){
//    var currentQuestion = randomQuestions[currentQuestionIndex];
//    currentQuestion.answer;
//     const questions = document.appendChild("buttons")
//
//
//    /// below is to display the choices
//    for( var i = 0; i <currentQuestion.choices.length; i++){
//        var choices = document.appendChild("span") 
//        choices.setAttribute("id", i);
//    }
////var timerEl = (function (document) {
////    var myTimer;
//    function startClock() {
//        myTimer = setInterval(myClock, 1000);
//        var c = 60;
//
//        function myClock() {
//            document.getElementById("timerNumber").innerHTML = --c;
//            if (c == 0) {
//                clearInterval(myTimer);
//                alert("Reached zero");
//            }
//        }
//    }
//    function end() {
//        clearInterval(myTimer)
//    }
//    return { start: start, end: end };
//})(document);

//--------------------------------------------------------------------------------------------------------------------------------

const questionS = [
    {
        question: "placeholder question?",
        choices: [
             "Placeholder answer",
             "Placeholder answer",
             "Placeholder answer",
             "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    }, {
        question: "placeholder question?",
        choices: [
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer",
            "Placeholder answer"
        ],
        answer: 0 /// the correct answer
    },]



     

  //  function correctOrNot() {
  //      currentQuestionIndex++;
  //      displayQuestion();
  //      //determine correct/incorrect
  //  }


   
    

    
        //display the question
        //display the choices
        
    

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
