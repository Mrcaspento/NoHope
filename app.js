///GLOBAL VARS


const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
startButton.addEventListener('click', startGame,)
const quizContainer = document.getElementById('quiz-Container')
const choiceBtnEL = document.getElementById('choice-buttons')
let randomQuestions, currentQuestionIndex; /// to shuffle the questions
const questionEl = document.getElementById('question-container')//gets the question out of the array of questions

nextButton.addEventListener('click',() =>{
    currentQuestionIndex++;
    displayNextQuestion();
 })
startButton.addEventListener('click', startGame,)
////--------------------------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------------------------------
//The Timer and quiz start functions!!!

function startGame() {
    startButton.classList.add('hide');
    quizContainer.classList.remove("hide");
    randomQuestions = questions.sort(() => Math.random() - .5);// makes sure i get a random question out of questions
    currentQuestionIndex = 0;
    //startTimer();
    displayNextQuestion();
}
//function startTimer();



function displayNextQuestion() {
    resetQuestion()
    displayQuestion(randomQuestions[currentQuestionIndex])

}
function displayQuestion(questions) {
    questionEl.innerText = questions.question;
    questions.choices.forEach(choice => {
        const button = document.createElement('button')
        button.innerText = choice.text
        button.classList.add('btn')
        if (choice.correct) {
            button.dataset.correct = choice.correct
        }
        button.addEventListener('click', selectChoice)
        choiceBtnEL.appendChild(button)
    })
}
function resetQuestion() {
    clearStat(document.body)
    nextButton.classList.add('hide')
    while (choiceBtnEL.firstChild) {
        choiceBtnEL.removeChild(choiceBtnEL.firstChild)
    }
}
function selectChoice(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStat(document.body, correct)
    Array.from(choiceBtnEL.children).forEach(button =>{
        setStat(button, button.dataset.correct)
    })
    if(randomQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
}
function setStat(element, correct){
    clearStat(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStat(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


//--------------------------------------------------------------------------------------------------------------------------------
//Question array with choices and correct answer
const questions = [
    {
        question: "What is the identity operator for not equal?",
        choices: [
            { text: 'prompt("Text Here")', correct: false },
            { text: '!==', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "How do you assign a default value to a prompt??",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'its a quiz', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what does ceil() method do?",
        choices: [
            { text: 'rounds a number upwards to the nearest interger', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'nothing', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'this ', correct: true },
            { text: 'drugs', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }, {
        question: "what is javaScript?",
        choices: [
            { text: 'Placehasdfaolder danswer', correct: true },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false },
            { text: 'Placehasdfaolder danswer', correct: false }
        ]
    }
]


