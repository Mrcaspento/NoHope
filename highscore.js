const username = document.getElementById('username');

username.addEventListener('keyup', () =>{
    saveHighScore.disabled = !username.value;
})


saveHighScore = (e) =>{
e.preventDefault();
};