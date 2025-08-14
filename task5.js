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

