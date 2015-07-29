
var numberGuesses = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;

function isValid() {
        var number = document.getElementById("guess").value;
        if(number == null || number == "" || isNaN(number)){
            alert( "Number Please!" );
            return false;
        };
       return true;
    };  

function addError(s){
    $("#message").html(s).addClass("error");
    $("#message").html(s).removeClass("error");
};

function addSuccess(s){
    $("#message").html(s).addClass("success");
    $("#message").html(s).removeClass("success");
}

function compareNumbers(){   
    var guess = document.getElementById("guess").value;
    
    if(guess > randomNumber){
        numberGuesses = numberGuesses - 1;
        addError("Too High!" + "<br>" + "You have " + numberGuesses + " guesses left")
           
        if(numberGuesses < 0){
            addError("You have no more guesses left");
        }
    }
    else if(guess < randomNumber){
        numberGuesses = numberGuesses - 1;
        addError("Too Low!" + "<br>" + "You have " + numberGuesses + " guesses left");
            
        if(numberGuesses > 0){
            addError("You have no more guesses left");  
        }
    }
    else{
        addSuccess("You guessed Correct!");
    }  
     
     console.log(randomNumber);
};

// add event listener
/*var guessButton = document.getElementById("guessButton");*/
$("#guessButton").on("click", function () {
  if (isValid()) {
    compareNumbers();
  }
  
});

