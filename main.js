/*
=======================================================

    ** Week 8 - Project 1  **

*/
function userInput(string) {
  var object = {}

  for(var i= 0; i< string.length; i++){
    if (object[string[i]]){
      object[string[i]]++
    } else{
      object[string[i]]=1
    }
  }
return object
}

console.log(userInput('hello'))

document.getElementById("letterButton").addEventListener("click", function(){
var result = document.getElementById("myText").value
document.getElementById("result").innerHTML = userInput(result)
})
