const app = "I don't do much."

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
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newkittens = [...kittens,name]
  return newkittens
}
function prependKitten(name){
  var newkittens = [name,...kittens]
  return newkittens
}
function removeLastKitten(){
  var newkittens = kittens.slice(0,kittens.length - 1)
  return newkittens
}
function removeFirstKitten(){
  var newkittens = kittens.slice(1)
  return newkittens
}
