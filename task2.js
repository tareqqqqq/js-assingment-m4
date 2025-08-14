 
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

