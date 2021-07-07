var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(`${name}`)
}

function destructivelyPrependKitten(name){
  kittens.unshift(`${name}`)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
var kittens2 = kittens.slice()
kittens2.push(`${name}`)
return kittens2
}

function prependKitten(name){
var kittens3 = kittens.slice()
kittens3.unshift(`${name}`)
return kittens3
}

function removeLastKitten(){
var kittens4 = kittens.slice(0, kittens.length-1)
return kittens4
}

function removeFirstKitten(){
  var kittens5 = kittens.slice(1)
  return kittens5
}
