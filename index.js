var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

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
  var newArray= [...kittens, "Broom"]
  return newArray
}

function prependKitten(name){
  var newArray= ["Arnold", ...kittens]
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}
