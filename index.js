
var kittens = ["Milo", "Otis", "Garfield"]
function kittens (a, b) {//define your array here
return kittens
}

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}



function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}



function destructivelyRemoveLastKitten (name) {
  return kittens.pop(-1)
}



function destructivelyRemoveFirstKitten (name) {
  return kittens.shift(0)
}



function appendKitten(name) {
  return [...kittens, name]
}



function prependKitten (name){
  return [name, ...kittens]
}



function removeLastKitten(name){
  return kittens.slice(0, [-1])
}



function removeFirstKitten(name) {
  return kittens.slice(1)
}

// Add your functions and code here
