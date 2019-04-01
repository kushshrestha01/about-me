'use strict';

function playYesNoGame() {
  var validResponses = ['YES', 'NO'];

  var allQuestions = ['Do I play sports',
    'Do I like to travel?',
    'Do you like to Horror Movies?',
    'Do I like to pop music?',
    'Is dog my favorite pet?'];

  var allCorrectAnswers = ['YES', 'YES', 'NO', 'YES', 'YES'];

  var outputForCorrectAnswers = [ 'I play sport.',
    'Travelling is my hobby',
    'I do not like horror movies',
    'I enjoy pop music.',
    'I love dogs and cats'
  ];

  var outputForIncorrectAnswers = ['I like sports. Sports are fun, you should try it',
    'I like to travel, it can be fun',
    'I do not enjoy horror movies, it is not for everybody',
    'I like pop music.',
    'I love dogs and cats'
  ];

  for (var i = 0; i < allQuestions.length; i++) {
    //prompt user for question
    var answer  = prompt(allQuestions[i]).toUpperCase();

    //check to see if  user input is yes, y, no, n
    while (!validResponses.includes(answer)) {
      alert ('please type yes or no');
      answer = prompt(allQuestions[i]).toUpperCase();
    }

    //if answer is correct  alert correct or not, and add 1 to correct answer
    if (answer === allCorrectAnswers[i]) {
      alert('Correct');
      correctAnswer++;
      document.getElementById('output' + (i + 2)).innerHTML = outputForCorrectAnswers[i];
    } else {
      alert('Incorrect');
      document.getElementById('output' + (i + 2)).innerHTML = outputForIncorrectAnswers[i];
    }
  }
}
//Current Date
var d = new Date();
document.getElementById('date').innerHTML = d;

var correctAnswer = 0;
var totalQuestions = 7;

//User Name
var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', great to meet you!!!. Lets play a guessing game..');
console.log('When asked their name, the user responded: ' + userName);

var nameResult = 'Great to meet you ' + userName.toUpperCase() ;
document.getElementById('output1').innerHTML = nameResult;

//play yes or no game
playYesNoGame();

//Q6
function guessANumberGame() {
  var guessNumber;
  guessNumber = prompt ('Guess my favorite number');

  var i = 0;
  for(i = 0; i<5; i++){
    if (guessNumber === '3'){
      alert ('You are right');
      correctAnswer++;
      break;
    }
    else if (guessNumber>3){
      alert ('guess lower');
      guessNumber = prompt ('Guess my favorite number');
    }
    else if (guessNumber<3){
      alert ('guess higher');
      guessNumber = prompt ('Guess my favorite number');
    }
  }
}

guessANumberGame();

//Q7
function guessAStateGame() {
  var livedStates = ['TEXAS','MINNESOTA','INDIANA','HAWAII'];
  var guessState;
  var uppercaseState;
  for(var j = 0; j < 5; j++){
    guessState = prompt('Can you guess a state that I have lived in besides Washington?');
    uppercaseState = guessState.toUpperCase();
    console.log(livedStates.includes(uppercaseState));

    if (livedStates.includes(uppercaseState)){
      alert ('You are right. I have lived in Texas, Minnesota, Indiana, Hawaii.');
      console.log(uppercaseState);
      correctAnswer++;
      break;
    }
    else{
      alert ('try again');
    }
  }
}
guessAStateGame();

//Quiz Results
function quizResults() {
  var totalResults = 'You got ' + correctAnswer + ' correct out of ' + totalQuestions + '.';
  document.getElementById('output7').innerHTML = totalResults;
}
quizResults();
