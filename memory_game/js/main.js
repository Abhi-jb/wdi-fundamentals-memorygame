var cards=["Queen","Queen", "King", "King"];
var cardsInPlay=[];
var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log('user flipped' +" " +cardsInPlay);
var cardTwo=cards[1];
cardsInPlay.push(cardTwo);
console.log('user flipped' + " "+cardsInPlay[1]);
if(cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[1] ){
  alert("You Found A Match");
}else{
  alert("Sorry Try Again");
}
