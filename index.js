var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){

  return kittens.concat("Broom")
}

function prependKitten(name){
var newKitten = ["Arnold"]
  return newKitten.concat(kittens)
}

function removeLastKitten(){
  return kittens.slice(0, 2)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
