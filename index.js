const app = "I don't do much."
function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}
function destructivelyPrependKitten(name){
kittens.unshift(name)
return kittens
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
var kitten = ['Milo', 'Otis','Garfield']
kitten.push(name)
return kitten
}
function prependKitten(name){
  var kitten = ['Milo', 'Otis','Garfield']
  kitten.unshift(name)
  return kitten
}
function removeLastKitten(){
  var kitten = ['Milo', 'Otis', 'Garfiel']
  kitten.pop()
  return kitten
}
function removeFirstKitten(){
  var kitten = ['Milo', 'Otis', 'Garfield']
  kitten.shift()
  return kitten
}
