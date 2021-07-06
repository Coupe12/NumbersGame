/*
- Player must guess a number between a min and a max 
- Player gets a certain amount of guesses 
- Notify playere of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again 
*/


//Game values
let min = 3,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;


// UI ELements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className == 'play-again') {
    window.location.reload();
  }
});


//Listen for guesses
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);


  //Check if its winning number
  if (guess == winningNum) {

    //Game over - won
    gameOver(true, `${winningNum} is correct!, You Win`)
  } else {


    //Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over -lost
      gameOver(false, `Game Over, you lost, the correct answer was ${winningNum}`)

    } else {


      //change border color 
      guessInput.style.borderColor = 'red';

      //Game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)

      //Clear Input 
      guessInput.value = '';

      setTimeout(3000, deleteMessage);



    }

  }

  if (guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} `, 'red')
    console.log(guess);
    return guessesLeft = guessesLeft + 1;





  }
});





//Game over 
function gameOver(won, msg) {
  let color;

  won == true ? color = 'green' : color = 'red';

  //Disable Input
  guessInput.disabled = true;

  //Set text color
  message.style.color = color;

  //Set message background
  message.className = "btn btn-primary"

  //change border color 
  guessInput.style.borderColor = color;



  //SetMessage
  setMessage(msg)


  //play again
  guessBtn.value = 'play again';
  guessBtn.className += 'play-again'

}

//Get Winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
};