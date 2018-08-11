$(document).ready(function() {
    // array for the letters the user has guessed
    var guessedLetters = [];
    // variable to keep a count of the users wins
    var winsCounter = 0;
    var guessesRemaining = 12;
    $("#guesses").text(guessesRemaining);
    
    
    var choices = [];
    choices[0] = function(){
            var rickMorty = ["_","_","_","_","&nbsp;","_","_","_","&nbsp;","_","_","_","_","_"];
            var answer0 = ["R","i","c","k","&nbsp;","a","n","d","&nbsp;","M","o","r","t","y"];
            guessedLetters = [];
            guessesRemaining = 12;

            // jquery text
            $("#currentWord").html(rickMorty.join(" "));
            $("#wins").text(winsCounter);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               
                
               
                if(rickMorty.toString() == answer0.toString()){
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/songs/RickandMorty.mp3");
                    winsCounter++;
                    alert("Congratulations!");
                    $("#wins").text(winsCounter);
                    // changes image to the winning answes image
                    $("#winningImage").attr("src", "assets/images/RickMorty.jpg");
                    audioElement.play();

                    

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
                       };

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
            
            

            rickMorty = ["_","_","_","_","&nbsp;","_","_","_","&nbsp;","_","_","_","_","_"];

        };

    choices[1] = function(){
            var friends = ["_","_","_","_","_","_","_"];
            var answer1 = ["F","r","i","e","n","d","s"];
            guessedLetters = [];
            guessesRemaining = 12;
            friends = ["_","_","_","_","_","_","_"];

            // jquery text
            $("#currentWord").html(friends.join(" "));
            $("#wins").text(winsCounter);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               
                
               
            
                if(friends.toString() == answer1.toString()){
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/songs/Friends.mp3");
                    winsCounter++;
                    alert("Congratulations!");
                    $("#wins").text(winsCounter);
                    // changes image to the winning answes image
                    $("#winningImage").attr("src", "assets/images/Friends.jpg");
                    audioElement.play();

                    

                   }else if(guessesRemaining > 1){
                   if((event.key === "f") || (event.key === "r") || (event.key === "i") || (event.key === "e") || (event.key === "n") || (event.key === "d") || (event.key === "s")) {
                       if(event.key === "f"){
                           friends [0] = "F";
                       } else if(event.key === "r") {
                           friends [1] = "r";
                       } else if(event.key === "i") {
                           friends [2] = "i";
                       } else if(event.key === "e") {
                           friends [3] = "e";
                       } else if(event.key === "n") {
                           friends [4] = "n";
                       } else if(event.key === "d") {
                           friends [5] = "d";
                       } else if(event.key === "s") {
                           friends [6] = "s";
                       } 

                        $("#currentWord").html(friends.join(" "));

              
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

    choices[2] = function(){
            var modernFamily = ["_","_","_","_","_","_","&nbsp;","_","_","_","_","_","_"];
            var answer2 = ["M","o","d","e","r","n","&nbsp;","F","a","m","i","l","y"];
            guessedLetters = [];
            guessesRemaining = 12;
            modernFamily = ["_","_","_","_","_","_","&nbsp;","_","_","_","_","_","_"];

            // jquery text
            $("#currentWord").html(modernFamily.join(" "));
            $("#wins").text(winsCounter);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               
                
               
            
                if(modernFamily.toString() == answer2.toString()){
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/songs/ModernFamily.mp3");
                    winsCounter++;
                    alert("Congratulations!");
                    $("#wins").text(winsCounter);
                    // changes image to the winning answes image
                    $("#winningImage").attr("src", "assets/images/ModernFamily.jpg");
                    audioElement.play();

                    

                   }else if(guessesRemaining > 1){
                   if((event.key === "m") || (event.key === "o") || (event.key === "d") || (event.key === "e") || (event.key === "r") || (event.key === "n") || (event.key === "f") || (event.key === "a") || (event.key === "i") || (event.key === "l") || (event.key === "y")) {
                       
                        if(event.key === "m"){
                           modernFamily [0] = "M";
                           modernFamily [9] = "m";

                       } else if(event.key === "o") {
                           modernFamily [1] = "o";

                       } else if(event.key === "d") {
                           modernFamily [2] = "d";

                       } else if(event.key === "e") {
                           modernFamily [3] = "e";

                       } else if(event.key === "r") {
                           modernFamily [4] = "r";

                       } else if(event.key === "n") {
                           modernFamily [5] = "n";

                       } else if(event.key === "f") {
                           modernFamily [7] = "F";

                       } else if(event.key === "a") {
                           modernFamily [8] = "a";

                       } else if(event.key === "i") {
                           modernFamily [10] = "i";

                       } else if(event.key === "l") {
                           modernFamily [11] = "l";

                       } else if(event.key === "y"){
                           modernFamily [12] = "y";
                       };

                        $("#currentWord").html(modernFamily.join(" "));

              
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
        
    choices[3] = function(){
            var theSimpsons = ["_","_","_","&nbsp;","_","_","_","_","_","_","_","_"];
            var answer3 = ["T","h","e","&nbsp;","S","i","m","p","s","o","n","s"];
            guessedLetters = [];
            guessesRemaining = 12;
            theSimpsons = ["_","_","_","&nbsp;","_","_","_","_","_","_","_","_"];

            // jquery text
            $("#currentWord").html(theSimpsons.join(" "));
            $("#wins").text(winsCounter);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               
                
               
            
                if(theSimpsons.toString() == answer3.toString()){
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/songs/theSimpsons.mp3");
                    winsCounter++;
                    alert("Congratulations!");
                    $("#wins").text(winsCounter);
                    // changes image to the winning answes image
                    $("#winningImage").attr("src", "assets/images/theSimpsons.jpeg");
                    audioElement.play();

                    

                   }else if(guessesRemaining > 1){
                   if((event.key === "t") || (event.key === "h") || (event.key === "e") || (event.key === "s") || (event.key === "i") || (event.key === "m") || (event.key === "p") || (event.key === "o") || (event.key === "n")) {
                       
                        if(event.key === "t"){
                           theSimpsons [0] = "T";

                       } else if(event.key === "h") {
                           theSimpsons [1] = "h";

                       } else if(event.key === "e") {
                           theSimpsons [2] = "e";

                       } else if(event.key === "s") {
                           theSimpsons [4] = "S";
                           theSimpsons [8] = "s";
                           theSimpsons [11] = "s";


                       } else if(event.key === "i") {
                           theSimpsons [5] = "i";

                       } else if(event.key === "m") {
                           theSimpsons [6] = "m";

                       } else if(event.key === "p") {
                           theSimpsons [7] = "p";

                       } else if(event.key === "o") {
                           theSimpsons [9] = "o";

                       } else if(event.key === "n") {
                           theSimpsons [10] = "n";

                       };

                        $("#currentWord").html(theSimpsons.join(" "));

              
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
        
    choices[4] = function(){
            var theOffice = ["_","_","_","&nbsp;","_","_","_","_","_","_"];
            var answer4 = ["T","h","e","&nbsp;","O","f","f","i","c","e"];
            guessedLetters = [];
            guessesRemaining = 12;
            theOffice = ["_","_","_","&nbsp;","_","_","_","_","_","_"];


            // jquery text
            $("#currentWord").html(theOffice.join(" "));
            $("#wins").text(winsCounter);
            $(document).keyup(function(event) {
                event.key = event.key.toLowerCase();

               
                
               
            
                if(theOffice.toString() == answer4.toString()){
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/songs/theOffice.mp3");
                    winsCounter++;
                    alert("Congratulations!");
                    $("#wins").text(winsCounter);
                    // changes image to the winning answes image
                    $("#winningImage").attr("src", "assets/images/theOffice.jpg");
                    audioElement.play();

                    

                   }else if(guessesRemaining > 1){
                   if((event.key === "t") || (event.key === "h") || (event.key === "e") || (event.key === "o") || (event.key === "f") || (event.key === "i") || (event.key === "c")) {
                       
                        if(event.key === "t"){
                           theOffice [0] = "T";

                       } else if(event.key === "h") {
                           theOffice [1] = "h";

                       } else if(event.key === "e") {
                           theOffice [2] = "e";
                           theOffice [9] = "e";


                       } else if(event.key === "o") {
                           theOffice [4] = "O";
                           

                       } else if(event.key === "f") {
                           theOffice [5] = "f";
                           theOffice [6] = "f";


                       } else if(event.key === "i") {
                           theOffice [7] = "i";

                       } else if(event.key === "c") {
                           theOffice [8] = "c";

                       };

                        $("#currentWord").html(theOffice.join(" "));

              
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
        
        $("#winningImage").on("click", function() {
            
            var g = Math.floor(Math.random() * choices.length);
            
            
                choices[g]();


        });


    
});