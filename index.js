var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){

kittens.push(name)


}

function destructivelyPrependKitten(name){

kittens.unshift(name);

}

function destructivelyRemoveLastKitten(){

kittens.pop()

}

function destructivelyRemoveFirstKitten(){

kittens.shift()

}

function appendKitten(name){

var appendKitten = [...kittens,name]

return(appendKitten)

}

function prependKitten(name){
  var prependKitten = [name,...kittens]

return(prependKitten)
}

function removeLastKitten(){
var byeByeKitten = kittens

return byeByeKitten.slice(0, byeByeKitten.length -1)


}

//why can't I use pop!!!!


function removeFirstKitten(){
var helloKitten = kittens

return helloKitten.slice(1)

}
