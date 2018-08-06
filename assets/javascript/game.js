function genRandomLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
}

var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessesSoFar = "";
var CompGuess = genRandomLetter();
console.log(CompGuess);
console.log('-------------')

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess === CompGuess) {
        guessesSoFar = "";
        numGuesses = 10;
        CompGuess = genRandomLetter();
        console.log('-------------')
        console.log(CompGuess);
        ++wins;
    } else if ((userGuess != CompGuess) && (numGuesses > 1)) {
        --numGuesses;
        guessesSoFar += (userGuess + ", ")
    } else {
        guessesSoFar = "";
        numGuesses = 10;
        CompGuess = genRandomLetter();
        console.log('-------------')
        console.log(CompGuess);
        ++losses;
    }

    var html =
        "<p>Wins: " + wins + "</p>" + "<br>" +
        "<p>Losses: " + losses + "</p>" + "<br>" +
        "<p>Guesses Left: " + numGuesses + "</p>" + "<br>" +
        "<p>Your guesses so far: " + guessesSoFar + "</p>" + "<br>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}