
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

function compareNumbers(){   
    var guess = document.getElementById("guess").value;
    var text=document.getElementById("message");
    if(guess > randomNumber){
        numberGuesses = numberGuesses - 1;
        text.innerHTML="Too High!" + "<br>" + "You have " + numberGuesses + " guesses left";
       text.setAttribute("style", "font-size:24px;color:blue");
        if(numberGuesses < 0){
            text.innerHTML="You have no more guesses left";
           text.setAttribute("style", "font-size:36px;color:red");
            }
    }
    else if(guess < randomNumber){
            numberGuesses = numberGuesses - 1;
            text.innerHTML="Too Low!" + "<br>" + "You have " + numberGuesses + " guesses left";
          text.setAttribute("style", "font-size:36px;color:green");
        if(numberGuesses > 0){
            text.innerHTML="You have no more guesses left";
            text.setAttribute("style", "font-size:36px;color:red");
            }
    }
    else{
         text.innerHTML="Your guess is correct!!!";
      text.setAttribute("style", "font-size:58px;color:Purple");
      }  
     console.log(randomNumber);
};

// add event listener
var guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", function () {
  if (isValid()) {
    compareNumbers();
  }
}, false);