'use strict';
//Current Date
var d = new Date();
document.getElementById('date').innerHTML = d;

var correctAnswer = 0;
var totalQuestions = 5;

//User Name
var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', great to meet you!!!. Lets play a guessing game..');
console.log('When asked their name, the user responded: ' + userName);

var nameResult = 'Great to meet you ' + userName.toUpperCase() ;
document.getElementById('output1').innerHTML = nameResult;

//Q1
var userSports = prompt('Do I play sports');
var uppercaseSports = userSports.toUpperCase();
var resultSports;
if(uppercaseSports === 'Y' || uppercaseSports ==='YES'){
  alert('Correct');
  resultSports = 'I play sport.';
  document.getElementById('output2').innerHTML = resultSports;
  correctAnswer++;
}
else if (uppercaseSports === 'N' || uppercaseSports ==='NO'){
  alert ('Incorrect');
  resultSports = 'I like sports. Sports are fun, you should try it';
  document.getElementById('output2').innerHTML = resultSports;
}
else{
  alert ('please refresh and type yes/y or no/n');
}
console.log('When asked if they play sports user responded ' + uppercaseSports);

//Q2
var userTravel = prompt('Do I like to travel?');
var uppercaseTravel = userTravel.toUpperCase();
var resultTravel;
if(uppercaseTravel === 'Y' || uppercaseTravel ==='YES'){
  alert('Correct');
  resultTravel = 'Travelling is my hobby';
  document.getElementById('output3').innerHTML = resultTravel;
  correctAnswer++;
}
else if (uppercaseTravel === 'N' || uppercaseTravel ==='NO'){
  alert ('Incorrect');
  resultTravel = 'I like to travel, it can be fun';
  document.getElementById('output3').innerHTML = resultTravel;
}
else{
  alert ('please refresh and type yes/y or no/n');
}
console.log('When asked if user like to travel: ' + uppercaseTravel);

//Q3
var userMovies = prompt('Do you like to Horror Movies?');
var uppercaseMovies = userMovies.toUpperCase();
var resultMovies;
if(uppercaseMovies === 'Y' || uppercaseMovies ==='YES'){
  alert('Incorrect');
  resultMovies = 'I do not like horror movies';
  document.getElementById('output4').innerHTML = resultMovies;
}
else if (uppercaseMovies === 'N' || uppercaseMovies === 'NO'){
  alert ('Correct');
  resultMovies = 'I enjoy horror movies, but it is not for everybody';
  document.getElementById('output4').innerHTML = resultMovies;
  correctAnswer++;
}
else{
  alert ('please refresh and type yes/y or no/n');
}
console.log('When asked if user like Horror Movies: ' + uppercaseMovies);

//Q4
var userMusic = prompt('Do I like to pop music?');
var uppercaseMusic = userMusic.toUpperCase();
var resultMusic;
if(uppercaseMusic === 'Y' || uppercaseMusic ==='YES'){
  alert('Correct');
  resultMusic = 'I enjoy pop music.';
  document.getElementById('output5').innerHTML = resultMusic;
  correctAnswer++;
}
else if (uppercaseMusic === 'N' || uppercaseMusic === 'NO'){
  alert ('Uhm... Incorrect');
  resultMusic = 'I like pop music.';
  document.getElementById('output5').innerHTML = resultMusic;
}
else{
  alert ('please refresh and type yes/y or no/n');
}
console.log('When asked if user like pop music: ' + uppercaseMusic);

//Q5
var userPets = prompt('Is dog my favorite pet?');
var uppercasePets = userPets.toUpperCase();
var resultPets;
if(uppercasePets === 'Y' || uppercasePets ==='YES'){
  alert('Correct');
  resultPets = 'I love dogs and cats';
  document.getElementById('output6').innerHTML = resultPets;
  correctAnswer++;
}
else if (uppercasePets === 'N' || uppercasePets === 'NO'){
  alert ('Incorrect');
  resultPets = 'I love dogs and cats';
  document.getElementById('output6').innerHTML = resultPets;
}
else{
  alert ('please refresh and type yes/y or no/n');
}
console.log('When asked if user like pets: ' + uppercasePets);

//Q6
var guessNumber;
guessNumber = prompt ('Lets...Guess my favorite number');
var i = 0;
for(i = 0; i<5; i++){
  if (guessNumber === '3'){
    alert ('You are right');
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

//Q7
var livedStates = ['TEXAS','MINESOTTA','INDIANA','HAWAII'];
var guessState;
var uppercaseState;
for(var j = 0; j < 5; j++){
  guessState = prompt('Can you guess a state that I have lived in besides Washington?');
  uppercaseState = guessState.toUpperCase();
  console.log(livedStates.includes(uppercaseState));

  if (livedStates.includes(uppercaseState)){
    alert ('You are right. I have lived in Texas, Minnesota, Indiana, Hawaii.');
    console.log(uppercaseState);
    break;
  }
  else{
    alert ('try again');
  }
}

//Quiz Results
var totalResults = 'You got ' + correctAnswer + ' correct out of ' + totalQuestions + '.';
document.getElementById('output7').innerHTML = totalResults;
