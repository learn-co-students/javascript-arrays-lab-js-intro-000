const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens = kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens = kittens.slice(1)
}
