///GLOBAL VARS
var timerEl = document.getElementById('timer');//timer element
var questionEl = document.querySelector("question"); //question element
var contentEl = document.getElementById('content');

function populate() {
    if (quiz.isDone()) {
        showScores();
    } else {
        //show question
     questionEl.innerHTML = quiz.questionIndex().text;

    }//show choices
    var choices = quiz.questionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
        var questionEl = document.querySelector("choice" + { i }); // this way it chooses all choices i have 
     questionEl.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }
    showProgress();
}
function guess(id, guess) {
    var button = document.querySelector(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
 questionEl = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores() {
   // var gameOverHtml = <h1>"Result"</h1>;
 //   gameOverHtml += <h2>id="score" Your scores: " + quiz.score + "</h2>
   // element = document.getElementById(quiz);
    //element.innerHTML = gameOverHtml;
}

function startQuiz() {
    var secondsLeft = 5;
    timerEl.textContent = secondsLeft + "seconds until we begin.";
  
    delay = parseInt(prompt('How many milliseconds per word?'));
    // Create the countdown timer.
    var intervalId = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft + "seconds until we begin.";
      
      if (secondsLeft === 0) {
        clearInterval(intervalId);
        speedRead();
      }
    }, 1000);
  }

var questions = [
    new question("placeholder dquestion?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
    new question("placeholder question?", ["placeholder answer", "placeholder answer", "placeholder answer", "placeholder answer"], "correctanswer"),
];
var quiz = new quiz(questions);
//function that operates the questions
populate();
//-------------------------------------
function question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}
//--------------------------------------
function quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}
quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}
quiz.prototype.isDone = function () {
    return this.questions.length === this.questionIndex;
}
quiz.prototype.guess = function (answer) {
    this.questionIndex++;

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}
