let ln = 9
let guess = Math.floor(Math.random()*10)+1
while(guess!=ln){
    console.log("Nope it is not " + guess)
    guess = Math.floor(Math.random()*10)+1
}
console.log("Yes! My lucky number is "+guess)