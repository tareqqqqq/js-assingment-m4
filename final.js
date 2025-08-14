function totalFine( fare ) {
// You have to write your code here
if(typeof fare !=="number" || fare<=0){
return "Invalid"
}

fine= fare+fare*.2+30
  return fine
}

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


