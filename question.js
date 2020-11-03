// world variables
function question(text, choices, answer){ // storing these parameters into the variables below
  this.text= text;
  this.choice = choices;
  this.answer = answer;

}
//made the  
question.prototype.correctAnswer = function(choice){
  return choice === this.answer;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getQuestion = function(){
  return this.questions[this.questionIndex];
}
Quiz.prototype.isDone = function(){
  return this.questions.length === this .questionIndex;
}
Quiz.prototype.guess = function(answer){
  this.questionIndex++;
  if(this.questionIndex().correctAnswer(answer)) {
      this.score++;
  }
}