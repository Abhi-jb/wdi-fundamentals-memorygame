var cards=["Queen","Queen", "King", "King"];
var cardsInPlay=[];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

  var cardToBePushed =  cards[cardId];
  cardsInPlay.push(cardToBePushed);
  console.log("user flipped"+" "+cardToBePushed);
  }

flipCard(0);// cardId = 0
flipCard(1);// cardId = 1
checkForMatch();
