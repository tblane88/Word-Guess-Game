$(document).ready(function() {
    var guessedLetters = [];
    $(document).keyup(function(event) {

        if($.inArray(event.key, guessedLetters) == -1){
            guessedLetters.push(event.key);
            $("#lettersGuessed").text(guessedLetters.toString());
        }

    });
});