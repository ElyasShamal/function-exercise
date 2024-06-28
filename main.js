function toEmoticon(string){
string = string.toLowerCase()
if(string === "shrug"){
  return '|_{"}_|'
}else if (string === 'smiley face'){
  return ':)'
}else if (string ==='frowny face' ){
  return':('
}else if (string === 'winky face' ){
   return ';)'
}else if(string === 'heart'){
  return '<3'
}else{
return '|_(* ~ *)_|'

}
}
console.log(toEmoticon("whatever")) 


function tipCalculator(quality, total){
  let tipPercentage;

  switch(quality){
    case "bad":
    tipPercentage = 0.05;
    break;
    case "ok":
    tipPercentage = 0.15;
    break;
    case 'good':
      tipPercentage = 0.20;
      break;
    case 'excellent':
      tipPercentage = 0.30;
      break;
    default:
      tipPercentage = 0.18;
  }

  return total * tipPercentage

}

console.log(tipCalculator('bad', 100));       
console.log(tipCalculator('ok', 100));         
console.log(tipCalculator('good', 100));      
console.log(tipCalculator('excellent', 100));  
console.log(tipCalculator('average', 100));

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))

console.log(whatRelation(3))
