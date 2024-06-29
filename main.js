// Function one 
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

// function two
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

// function three
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

// function 5
function howOld(age, year) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const calculatedAge = year - birthYear;
  
  if (year > currentYear) {
    return `You will be ${calculatedAge} in the year ${year}`;
  } else if (year < birthYear) {
    const yearsBeforeBorn = birthYear - year;
    return `The year ${year} was ${yearsBeforeBorn} years before you were born`;
  } else {
    return `You were ${calculatedAge} in the year ${year}`;
  }
}

console.log(howOld(30, 2050));


// function 6
function sillySentence (str1 , str2, str3){
  return `I am so ${str1} because I ${str2} coding! Time to write some more awesome ${str3}!`
}

console.log(sillySentence('excited', 'love', 'functions')) 

function numImaginaryFriends(totalFriends){
  let imaginaryFrineds = totalFriends * 0.25

  imaginaryFrineds = Math.ceil(imaginaryFrineds)
  return imaginaryFrineds
}


console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10))

// function 7
function truthyOrFalsy(value){
 return Boolean(value)
}

console.log(truthyOrFalsy(0))


//function 8 

function calculateWeight(earthWeight, planet){
  switch(planet){
    case "Mercury":
    return earthWeight * 0.378;
    case "Venus":
    return earthWeight * 0.907;
    case "Mars":
    return earthWeight * 0.377;
    case "Jupiter":
    return  earthWeight * 2.36;
    case 'Saturn':
    return earthWeight * 0.916;
    default:
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

console.log(calculateWeight(100, 'Jupiter'))

// function 9 

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 ) + 1
    let die2 = Math.floor(Math.random() * 6 ) + 1
    return die1 + die2
}

// function 10

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`

}

console.log(reportingForDuty('Private', 'Fido'))

//function 11
function finalGrade(grade1, grade2, grade3) {
  if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
    return 'You have entered an invalid grade.';
  }
  // Calculate the average
  let average = (grade1 + grade2 + grade3) / 3;
  if (average >= 0 && average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else if (average <= 100) {
    return 'A';
  }
}
console.log(finalGrade(99, 92, 95)) // Should print 'A'


