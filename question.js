// world variables

var quiz = [
    [1, "placeholder question", "placeholder answer"],
    [2, "placeholder question", "placeholder answer"],
    [3, "placeholder question", "placeholder answer"],
    [4, "placeholder question", "placeholder answer"],
    [5, "placeholder question", "placeholder answer"],
    [6, "placeholder question", "placeholder answer"],
    [7, "placeholder question", "placeholder answer"],
    [8, "placeholder question", "placeholder answer"],
    [9, "placeholder question", "placeholder answer"],
    [10, "placeholder question","placeholder answer"],
];

var answer;
var response;

answer = prompt(quiz[0][1]);
response = answer.toLocaleLowerCase;
function quizlet(){
for (var i = 0; i < quiz.length; i += 1) { // the for loop is running though each question in the array
    if (response === quiz[0][2]) {
        document.write(<h2>You got question $(quiz[0][0]) correct!</h2>);
    } else {
        document.write(<h2>You got question $(quiz[0][0]) wrong!</h2>);
    }
}
}