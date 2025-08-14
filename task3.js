function  bestTeam( player1, player2 ) {
// You have to write your code here
if(typeof player1 !==typeof player2){
            return "Invalid"
  }

const player1Foul=player1.foul+player1.cardY+player1.cardR
const player2Foul=player2.foul+player2.cardY+player2.cardR

if(player1Foul< player2Foul){
   return player1.name
 } else if(player1Foul===player2Foul){
     return "Tie"
}else{
      return player2.name
}

}

console.log(bestTeam({  name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));

console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }));

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
// console.log(bestTeam(null,null));
// done

