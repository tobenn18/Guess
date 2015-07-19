
var numberGuesses = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;

function compareNumber(){   
 var guess = document.getElementById("guess").value;
    if(guess > randomNumber){
       console.log("Your guess is too high!");
        numberGuesses = numberGuesses - 1;

        if(numberGuesses < 0){
           console.log("No More Guesses Left")
        };
    }
    else if(guess < randomNumber){
            console.log("Your guess is too low!");
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
<!---->