let appleshelf = document.getElementById("apple-shelf")
let orangeshelf =document.getElementById("orange-shelf")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive = true

function ganeratePasswrd(){
    if(isAlive == true){
for (let i  = 0; i < 15 ; i++){
    const random1 = Math.floor(Math.random()* characters.length)
    appleshelf.textContent += characters[random1]
    const random2 = Math.floor(Math.random()* characters.length)
    orangeshelf.textContent += characters[random2]
    isAlive = false
}
}
}
