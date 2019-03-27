'use strict'
      //Q1
      var userName = prompt('What is your name?');
      alert('Hi, ' + userName + ', great to meet you!!!. Lets play a guessing game..');
      console.log('When asked their name, the user responded: ' + userName);   
      
      var nameResult = "Great to meet you " + userName.toUpperCase() ;
      document.getElementById("output1").innerHTML = nameResult;
      
      //Q2
      var userSports = prompt('Do you play sports');
      var uppercaseSports = userSports.toUpperCase();
      if(uppercaseSports === 'Y' || uppercaseSports ==='YES'){
        alert('I play sports too!!!');
        var resultSports = 'I play sport too ';
        document.getElementById('output2').innerHTML = resultSports;
      }
      else if (uppercaseSports === 'N' || uppercaseSports ==='NO'){
        alert ('okay')
        var resultSports = 'I like sports. Sports are fun, you should try it';
        document.getElementById('output2').innerHTML = resultSports;
      }
      else{
        alert ('please refresh and type yes/y or no/n')
      }
      console.log('When asked if they play sports user responded ' + uppercaseSports);
      
      //Q3
      var userTravel = prompt('Do you like to travel?');
      var uppercaseTravel = userTravel.toUpperCase();
      if(uppercaseTravel === 'Y' || uppercaseTravel ==='YES'){
        alert('Thats good!!!');
        var resultTravel = 'I like to travel as well';
        document.getElementById("output3").innerHTML = resultTravel;
      }
      else if (uppercaseTravel === 'N' || uppercaseTravel ==='NO'){
        alert ('okay')
        var resultTravel = 'I like to travel, it can be fun';
        document.getElementById("output3").innerHTML = resultTravel;
      }
      else{
        alert ('please refresh and type yes/y or no/n')
      }
      console.log('When asked if user like to travel: ' + uppercaseTravel);
      
      //Q4
      var userMovies = prompt('Do you like to Horror Movies?');
      var uppercaseMovies = userMovies.toUpperCase();
      if(uppercaseMovies === 'Y' || uppercaseMovies ==='YES'){
        alert('Okay');
        var resultMovies = 'I enjoy horror movies too';
        document.getElementById("output4").innerHTML = resultMovies;
      }
      else if (uppercaseMovies === 'N' || uppercaseMovies === 'NO'){
        alert ('Okay')
        var resultMovies = 'I enjoy horror movies, but it is not for everybody';
        document.getElementById("output4").innerHTML = resultMovies;
      }
      else{
        alert ('please refresh and type yes/y or no/n')
      }
      console.log('When asked if user like Horror Movies: ' + uppercaseMovies);

      //Q5
      var userMusic = prompt('Do you like to pop music?');
      var uppercaseMusic = userMusic.toUpperCase();
      if(uppercaseMusic === 'Y' || uppercaseMusic ==='YES'){
        alert('Okay');
        var resultMusic = 'I enjoy pop music as well';
        document.getElementById("output5").innerHTML = resultMusic;
      }
      else if (uppercaseMusic === 'N' || uppercaseMusic === 'NO'){
        alert ('Uhm...')
        var resultMusic = 'I like pop music.';
        document.getElementById("output5").innerHTML = resultMusic;
      }
      else{
        alert ('please refresh and type yes/y or no/n')
      }
      console.log('When asked if user like pop music: ' + uppercaseMusic);

      //Q6
      var userPets = prompt('Do you like to like pets?');
      var uppercasePets = userPets.toUpperCase();
      if(uppercasePets === 'Y' || uppercasePets ==='YES'){
        alert('Okay');
        var resultPets = 'Me too. I love dogs and cats';
        document.getElementById("output6").innerHTML = resultPets;
      }
      else if (uppercasePets === 'N' || uppercasePets === 'NO'){
        alert ('Uhm...')
        var resultPets = 'I love pets though';
        document.getElementById("output6").innerHTML = resultPets;
      }
      else{
        alert ('please refresh and type yes/y or no/n')
      }
      console.log('When asked if user like pop music: ' + uppercaseMusic);

      /*var userFruit = prompt("What is your favorite fruit?");
      alert("I like " + userFruit + " as well");
      console.log('When asked about their favorite fruit, the user responded ' + userFruit);

      var fruitResult = "I like " + userFruit + " as well. " ;
      document.getElementById("output3").innerHTML = fruitResult;

      var userVacation = prompt("What is your vacation spot?");
      alert(userVacation + ", that is a cool place");
      console.log('When asked about their favorite vacation spot, the user responded ' + userVacation);
      
      var vacationResult = "I heard " + userVacation + " is a a great spot." ;
      document.getElementById("output4").innerHTML = vacationResult;
      What does CSS stand for?
      Is the abberration of HTML Hypertext Markup Language?
      Who is making the web standards? World Wide Web Consortium
      WHat is the correct HTML element for the largest heading?



    */
      var d = new Date();
      document.getElementById("date").innerHTML = d;

      