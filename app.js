///GLOBAL VARS


const startButton = document.getElementById('startBtn') 
const nextButton = document.getElementById('nextBtn') 
startButton.addEventListener('click', startGame,)
const quizContainer = document.getElementById('quiz-Container')
const choiceBtnEL = document.getElementById('choice-buttons')
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
   // resetQuestion();
    displayQuestion(randomQuestions[currentQuestionIndex])
}
function displayQuestion(questions) {
    questionEl.innerText = questions.question;
    question.choices.forEach(choice => {
        const button = document.createElement('button')
        button.innerText = choices.text
        button.classList.add('choiceBtn')
        if(choice.correct){
            button.dataset.correct = choice.correct
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
function selectChoice(event){

}


//--------------------------------------------------------------------------------------------------------------------------------
//Question array with choices and correct answer
const questions = [
    {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    }, {
        question: "what is javaScript?",
        choices: [
             {text:'Placehasdfaolder danswer', correct: true},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
             {text:'Placehasdfaolder danswer', correct: false},
        ]
    },
]


     