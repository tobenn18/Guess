
var numberGuesses = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;

    
    $( "#guessButton" ).click(function() {
        var number = $("#guess").val();
        if(guess < 0){
            alert( "Number Please!" );
        };
    });
     

function compareNumber(){   
    var guess = document.getElementById("guess").value;
    var text=document.getElementById("message");
    if(guess > randomNumber){
       
        text.innerHTML="Too High!";
        numberGuesses = numberGuesses - 1;

        if(numberGuesses < 0){
           console.log("No More Guesses Left")
            }
    }
    else if(guess < randomNumber){
            text.innerHTML="Too Low!";
            numberGuesses = numberGuesses - 1;
        if(numberGuesses > 0){
           console.log("No More Guesses Left")
            }
    }
    else{
        console.log("Your guess is correct!");   
    }  
    
    console.log(randomNumber); 
    };


// add event listener
var guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", compareNumber, false);

