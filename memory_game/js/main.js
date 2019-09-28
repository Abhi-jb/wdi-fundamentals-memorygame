var cards=[
  {
    name:"queen",
    suit:"love",
    path:"images/queen-of-hearts.png"
  }, {
  name:"queen",
  suit:"diamond",
  path:"images/queen-of-diamonds.png"
}, {
  name:"king",
  suit:"heart",
  path:"images/king-of-hearts.png"
}, {
  name:"king",
  suit:"diamond",
  path:"images/king-of-diamonds.png"
}
];
var cardsInPlay=[];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

  var cardToBePushed =  cards[cardId].name;
  cardsInPlay.push(cardToBePushed);
  console.log("user flipped"+" "+cardToBePushed);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].path);
}

flipCard(0);// cardId = 0
flipCard(1);
checkForMatch();
