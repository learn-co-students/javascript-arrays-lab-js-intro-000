const app = "I don't do much."
const kittens = []

function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  return [...kittens,name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeFirstKitten(){
  return kittens.slice(1)
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}
