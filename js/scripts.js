// var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
// var suits = ["clubs", "diams", "spades", "hearts"]
//
// $(function() {
//   var allCards = buildADeck();
//
//   $("#deal").click(function() {
//
//     allCards.forEach(function(card) {
//       var cardSuit = card.split(" ")[2];
//       var cardNumb = card.split(" ")[0];
//
//       if (cardNumb === 'jack') {cardNumb = 'j'}
//       if (cardNumb === 'queen') {cardNumb = 'q'}
//       if (cardNumb === 'king') {cardNumb = 'k'}
//
//       $("#each-card").append("<li><div class='card rank-7 "+cardSuit+"'><span class='rank'>"+cardNumb+"</span><span class='suit'></span></div></li>");
//
//       $("#deal").hide();
//     })
//
//
//   })
//
//
// })

// function buildADeck() {
//   var deck = [];
//   suits.forEach(function(suit) {
//     // ["clubs", "diamonds", "spades", "hearts"]
//     ranks.forEach(function(rank) {
//       // ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
//       deck.push(rank + " of " + suit);
//     })
//   })
//   return deck;
//
// }



//--Business Logic

var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var deckOfCards = [];
 function buildADeck(){

  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      deckOfCards.push(rank + " of " + suit);
    });
  });
  return deckOfCards;
  // alert(deckOfCards);
};
//---User Interface Logic
$(document).ready(function(){
  // event.preventDefault();
   var finalDeck = buildADeck(suits, ranks);

   $("#submit").click(function(){
   finalDeck.forEach(function(card){
    $("#outputDeck").append('<li>' + card + '</li>')
    })

    $("#output").hide();


  })
  $("#hide").click(function(){
    finalDeck.forEach(function(card){
      $("#outputDeck").empty('<li>' + card + '</li>')
      $("#output").hide();
      })

  })
});
