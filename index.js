var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
var array = new Array()
array = kittens

function destructivelyAppendKitten(name)
{
  kittens = [...kittens, name]
  return kittens
}
kittens = array

function destructivelyPrependKitten(name)
{
  kittens = [name, ...kittens]
  return kittens
}
kittens = array

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
kittens = array

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1)
  return kittens
}
kittens = array

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
