$(document).ready(function() {

    $(document).keyup(function(event) {
        $("#lettersGuessed").text(event.key);
    });
});