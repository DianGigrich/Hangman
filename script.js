//wait for user to click start game, load win/loss from localstorage
// randomly select starting word
//display "+" for each letter in selected word
//start countdown timer
// once game is started, listen for key strokes
//if letter in word, display letter instead of "_"
//if all letters showing, end game as win
//if time runs out end game as loss
//add win/lost to ls
//reset scores in ls when rest button is clicked
var startGame = document.getElementById("start-button")
var word;
var guesses;
var chosenWordArray;
var arrayOfWords = ["elephant", "giraffe", "hippo", "platapus", "monkey", "banana"];
var isPlaying = false;
var over = document.querySelector(“.playfield”)
var secondsLeft = 10
"var timeLeftSpan" = document.querySelector("time-left")

var winSpan = document.getElementId("winCount");
var lossSpan = document.getElementId("lossCount")
var wins = 
var losses = 
var resetBtn = document.getElementID("reset-button")

console.log("Random word: " + word);
// var lettersLeft = word.length;

// event listener on start button, calls startGame

startGame.addEventListener("click", function () {
    if(isPlaying){
        return;
    }
    isPlaying=true
    secondsLeft = 10
    clearInterval(secondsLeft)
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            over.textContent = "GAME OVER"
            over.setAttribute("style","font-size: 40px; font-weight: bold"
        }
    }, 1000);

    word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
    chosenWordArray = chosenWordArray.split("")
    guesses = []

    console.log(word);
//display "_" for each letter in selected word
    for (let i = 0; i < word.length; i++) {
        guesses.push"_";
    }

    wordDisplayH2.textContent=guesses.join(");}

    document.ATTRIBUTE_NODE.addEventListenere("keyup",fucntion(event){
        if(isPLaying){
            var keyPressed= event.key;
            console.log(keyPressed);
if(chosenWordArray.includes(keyPressed)){
    console.group("its in teh word!")
    for (let i=0, i < chosenWordArray.length, i++) {
        
    }
    console.log(guesses);
wordDisplayH2.textContent=guesses.join(" ")
console.log(word,guesses.join(""))
if(word===guesses.join("")) {
    alert("you win!")
    isPlaying=false;
}
if(timeLeft === 0) {
    alert("you lost!")
    isPlaying = false;
    clearInterval()
    losses++
    local
}
}
        }
    }


}
resetBtn.addEventListener("click", fucntion() {
    wins = 0
    losses = 0
    localStorage.setItem("wins",wins);
    localStorage.setItem("losses",losses);

})
document.addEventListener("")
localStorage.setItem("wins", wins)
localStorage.setItem("losses", losses)
var retrieveWins = localStorage.getItem("wins")
var retrieveLosses = localStorage.getItem("loss")

winSpan.textContent = retrieveWins;
lossSpan.textContent = retrieveLosses;