var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function kittyCall(){
  return kittens
}

function destructivelyAppendKitten(K){
  kittens.push(K)
  return kittens
}
function destructivelyPrependKitten(K){
  kittens.unshift(K)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(K){
  return [...kittens,K]
}
function prependKitten(K){
  return [K,...kittens]
}
function removeLastKitten(){
var Solution =  kittens.slice(0, kittens.length -1)
  return Solution
}
function removeFirstKitten(){
  var Solution = kittens.slice(1)
  return Solution
}
