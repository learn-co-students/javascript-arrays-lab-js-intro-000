var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}
function prependKitten(name){
var kittens2 = [name, ...kittens]
  return kittens2
}
function appendKitten(name){
var kittens2 = [...kittens, name]
  return kittens2
}
function removeLastKitten(name){
var kittens2 = kittens.slice(0,-1)
  return kittens2
}
function removeFirstKitten(name){
var kittens2 = kittens.slice(1)
  return kittens2
}
