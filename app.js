///GLOBAL VARS
var timerEl = document.getElementById('timer');//timer element
var contentEl = document.getElementById('content');
const startButton = document.getElementById('startBtn') 
startButton.addEventListener('click', startGame,)
const quizContainer = document.getElementById('quiz-Container')
const answerBtnEL = document.getElementById('choiceBtn')
const randomQuestions, currentQuestionIndex; /// to shuffle the questions
const questionEl = document.getElementById('question')//gets the question out of the array of questions



//--------------------------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------------------------------
//The Timer and quiz start functions!!!

function startGame(){
    startButton.classList.add('hide');
    quizContainer.classList.remove("hide");
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    startTimer();
    displayQuestion();
}
function startTimer();



function displayNextQuestion(){
    showQuestion(randomQuestions[currentQuestionIndex])
}
function displayQuestion(question) {
    questionEl.innerText = questions.question
}


//--------------------------------------------------------------------------------------------------------------------------------

const questions = [
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
v

     