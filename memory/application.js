$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]
  
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
  var shuffled_array = shuffle(card_array)
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  var card_1 = 0;
  var card_2 = 1;
  var click_count = "first";
  $(".card").click(function(){
    if(click_count == "first"){
    $(this).find("p").css("opacity", 1).addClass('clicked');
    card_1 = $(this).find("p").html();
    click_count = "second";
    }
    else{
      $(this).find("p").css("opacity", 1).addClass('clicked');
      card_2 = $(this).find("p").html();
      if(card_1 == card_2){
        $(".clicked").css("color", "green").removeclass("clicked");
        // If they are the same, then they turn bold and stay on the screen
      }
      else{
        $(".clicked").css("opacity", 0);
        //Else, the inccorect matching goes away. If a pair has been made, make sure that those are not also erased. The If-Else is our next step
      }
    }
  })
  $("#clear").click(function(){
    $(document).find("p").css("opacity", 0)
  })
});
