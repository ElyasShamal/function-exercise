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
