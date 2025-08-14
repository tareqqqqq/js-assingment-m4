 function totalFine( fare ) {
// You have to write your code here
if(typeof fare !=="number" || fare<=0){
return "Invalid"
}

fine= fare+fare*.2+30
  return fine
}
console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));
// done



 
function  onlyCharacter( str ) {
// You have to write your code here
if(typeof str !=="string"){
     return "Invalid"
}
    
 str=str.toUpperCase()

     
     
   let result ='';

       
 for (let  i = 0; i < str.length; i++)
 if (str[i] !==" "){
    result+=(str[i]) 
 }  
         
 return result;


}
console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));

// done



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

// done



function  isSame(arr1,arr2) {
 // You have to write your code here

 if ( !Array.isArray(arr1) || !Array.isArray(arr2)){
 return "Invalid"
 }

 for (let i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
 
  if (arr1.length !== arr2.length) {
    return false; 
  }

  return true;
}

console.log(isSame([1,2,3],[1,2,3]));
console.log(isSame([34,5,7,9],[34,5,7]));
console.log(isSame([1,undefined,3],[1,null,3]));
console.log(isSame([1,4,5],[1,4,5]));
console.log(isSame([1,"4",4],[1,4,4]));
console.log(isSame([2,5,6],256));
console.log(isSame({data:[2,5,6]},[2,5,6]));

// done



function  resultReport( marks ) {
// You have to write your code here
if(Array.isArray(marks) !==true){
    return "Invalid"
}
if(marks.length===0){
  const result={
     finalScore: 0, 
     pass: 0, 
     fail: 0}

     return result
}
let pass=0
let fail=0
let sum=0
for (const mark of marks){
    if(mark>=40){
        pass++
    }else{fail++}
    sum=sum+mark
}

  finalScore=Math.round(sum/marks.length)


const result={finalScore: finalScore, 
     pass: pass, 
     fail: fail}

     return result
}
console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));

