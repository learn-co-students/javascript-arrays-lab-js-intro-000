const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
destructivelyAppendKitten("Ralph")

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
destructivelyPrependKitten("Bob")

function destructivelyRemoveLastKitten(){
  kittens.pop(1)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(1)
}

function appendKitten(name){
  return [...kittens,name]
}
appendKitten("Broom")

function prependKitten(name){
  return [name,...kittens]
}
appendKitten("Arnold")

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
