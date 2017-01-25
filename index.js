const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1)
}

function appendKitten(name){
  var morekittens = [...kittens, name]
  return morekittens
}

function prependKitten(name){
  var morekittens = [name, ...kittens]
  return morekittens
}

function removeLastKitten(){
  var morekittens = kittens.slice(0,kittens.length-1)
  return morekittens
}

function removeFirstKitten(){
  var morekittens = kittens.slice(1)
  return morekittens
}
