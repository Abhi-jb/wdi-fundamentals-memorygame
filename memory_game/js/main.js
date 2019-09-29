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

function checkForMatch()
{
  if (cardsInPlay[0] === cardsInPlay[1])
  {
    alert("You found a match!");
  } else
  {
  alert("Sorry, try again.");
  }
}

function flipCard(){
  var cardId = this.getAttribute('data-id');
  var cardToBePushed =  cards[cardId].name;
  cardsInPlay.push(cardToBePushed);
  console.log("user flipped"+" "+cardToBePushed);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].path);
  this.setAttribute("src", cards[cardId].path);

  checkForMatch();
}

var createBoard = function() {

  for(i=0;i< cards.length;i++)
   {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src','images/back.png');
      cardElement.setAttribute('data-id',i);
      cardElement.addEventListener('click',flipCard)
      document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();
