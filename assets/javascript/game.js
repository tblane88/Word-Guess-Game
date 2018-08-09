$(document).ready(function() {
    // array for the letters the user has guessed
    var guessedLetters = [];
    // variable to keep a count of the users wins
    var winsCounter = 0;
    var guessesRemaining = 5;
    $("#guesses").text(guessesRemaining);
    
    
    
    var choices = [];
    function choice1(){
            var rickMorty = ["_","_","_","_","&nbsp;","_","_","_","&nbsp;","_","_","_","_","_"];
            var answer = ["R","i","c","k","&nbsp;","a","n","d","&nbsp;","M","o","r","t","y"];
            var winCount = 0
            // jquery text
            $("#currentWord").html(rickMorty.join(" "));
            $("#wins").text(winCount);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               if(rickMorty.toString() == answer.toString()){
                winCount++;
                alert("Congratulations!");
                $("#wins").text(winCount);
                $()
               
            
                }else if(guessesRemaining > 1){
                   if((event.key === "r") || (event.key === "i") || (event.key === "c") || (event.key === "k") || (event.key === "a") || (event.key === "n") || (event.key === "d") || (event.key === "m") || (event.key === "o") || (event.key === "t") || (event.key === "y")) {
                       if(event.key === "r"){
                           rickMorty [0] = "R";
                           rickMorty [11] = "r";
                       } else if(event.key === "i") {
                           rickMorty [1] = "i";
                       } else if(event.key === "c") {
                           rickMorty [2] = "c";
                       } else if(event.key === "k") {
                           rickMorty [3] = "k";
                       } else if(event.key === "a") {
                           rickMorty [5] = "a";
                       } else if(event.key === "n") {
                           rickMorty [6] = "n";
                       } else if(event.key === "d") {
                           rickMorty [7] = "d";
                       } else if(event.key === "m") {
                           rickMorty [9] = "M";
                       } else if(event.key === "o") {
                           rickMorty [10] = "o";
                       } else if(event.key === "t") {
                           rickMorty [12] = "t";
                       } else if(event.key === "y"){
                           rickMorty [13] = "y";
                       }

                        $("#currentWord").html(rickMorty.join(" "));

              
                   } else if($.inArray(event.key, guessedLetters) == -1){
                        guessedLetters.push(event.key);
                        $("#lettersGuessed").text(guessedLetters.toString());
                        guessesRemaining--;
                        $("#guesses").text(guessesRemaining);
            
            
            
                    }
                }else {
                    alert("Sorry You lose");
                }
            });
        };

    choices[0] = choice1();
    choices.indexOf(0);




    
});