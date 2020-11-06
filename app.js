///GLOBAL VARS
var timerEl = document.getElementById('timer');//timer element
var contentEl = document.getElementById('content');
const startButton = document.getElementById('startBtn') 
const nextButton = document.getElementById('nextBtn') 
startButton.addEventListener('click', startGame,)
const quizContainer = document.getElementById('quiz-Container')
const answerBtnEL = document.getElementById('choiceBtn')
let randomQuestions, currentQuestionIndex; /// to shuffle the questions
const questionEl = document.getElementById('question-container')//gets the question out of the array of questions



//--------------------------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------------------------------
//The Timer and quiz start functions!!!

function startGame(){
    startButton.classList.add('hide');
    quizContainer.classList.remove("hide");
    randomQuestions = questions.sort(() => Math.random() - .5);// makes sure i get a random question out of questions
    currentQuestionIndex = 0;
    //startTimer();
    displayNextQuestion();
}
//function startTimer();



function displayNextQuestion(){
    resetQuestion();
    displayQuestion(randomQuestions[currentQuestionIndex])
}
function displayQuestion(questions) {
    questionEl.innerText = questions.question;
    questions.choices.forEach(choices => {
        const button = document.createElement('button')
        button.innerText = choices.text
        button.classList.add('choiceBtn')
        if(choices.answer){
            button.dataset.answer = choices.answer
        }
        button.addEventListener('click', selectChoice)
        answerBtnEL.appendChild(button)
    });
}
function resetQuestion(){
    nextButton.classList.add('hide')
    while(answerBtnEL.firstChild){
        answerBtnEL.removeChild
    }
}
//function selectChoice(e){

//}


//--------------------------------------------------------------------------------------------------------------------------------
//Question array with choices and correct answer
const questions = [
    {
        question: "what is javaScript?",
        choices: [
             "Placehasdfaolder danswer",
             "Placeholasdfasdfasder dsaanswer",
             "Placeholderadsfasdf answer",
             "Placeholadsfasdfder answer"
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


     