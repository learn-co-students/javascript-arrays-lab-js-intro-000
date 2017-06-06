const app = "I don't do much."

var kittens = ["Milo" , "Otis" , "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var skittens = [...kittens, name];
  return skittens
}


function prependKitten(name){
  var skittens = [name, ...kittens];
  return skittens
}

function removeLastKitten() {
  var skittens = kittens.slice(0,-1);
  return skittens
}

function removeFirstKitten() {
  var skittens = kittens.slice(1);
  return skittens
}
