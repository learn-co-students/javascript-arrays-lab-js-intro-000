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
  var nuarray = kittens.concat(name)
  return nuarray
}
function prependKitten(name){
  var nuarray = [name].concat(kittens)
  return nuarray
}
function removeLastKitten(){
  var nuarray = kittens.slice(0, kittens.length - 1)
  return nuarray
}
function removeFirstKitten(){
  var nukittens = kittens.slice(1)
  return nukittens
}
