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


