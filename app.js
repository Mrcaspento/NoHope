function populate(){
    if(quiz.isDone()){
        //showScores();
    }else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.questionIndex().text;

    }//show choices
    var choices = quiz.questionIndex().choices;
    for(var i = 0; i< choices.length; i++){
        var element = document.getElementById("choice" + i); // this way it chooses all choices i have 
        element.innerHTML = choices[i];
    }
}   
  var quiz = new Quiz(questions);
  //function that operates the questions
  populate();

var questions = [
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new Question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
];
