$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var chooseNumber = Math.floor(Math.random()* 100);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guess = parseInt($("input").val());
    $('#feedback').fadeOut().empty().fadeIn();
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if(guess===chooseNumber ){
      //what happens if the guess is correct?
      $('#feedback').append("You Are Correct");
    }
    //if the user guessed too high...
    if ( guess > chooseNumber ){
      //update the 'feedback' paragraph to tell them to guess lower
      $('#feedback').append( "guess lower" );
    }
    //otherwise, the user guessed too low...
    if  ( guess < chooseNumber ){
      //update the 'feedback' paragraph to tell them to guess higher
    $('#feedback').append ( "guess higher" );
    }
    $('input').val(""); 
  });
});
