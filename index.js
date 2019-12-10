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
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newKittens=[...kittens, name]
  return newKittens
}
function prependKitten(name){
  var prependKittens=[name, ...kittens]
  return prependKittens
}
function removeLastKitten(){
  var removeLast= kittens.slice(0,kittens.length-1) //keep these indexes slice here (0,2)
  return removeLast
}
function removeFirstKitten(){
  var removeFirst=kittens.slice(1)
  return removeFirst
}
