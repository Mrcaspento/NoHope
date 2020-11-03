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
        var element = document.getElementById("choice" + {i}); // this way it chooses all choices i have 
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }
    showProgress();
}   
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}
function showProgress(){ 
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2>id=";score";Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml; 
}


var questions = [
    new question("placeholder dquestion?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
    new question("placeholder question?", ["placeholder answer","placeholder answer","placeholder answer","placeholder answer"],"correctanswer"),
];
var quiz = new quiz(questions);
  //function that operates the questions
  populate();