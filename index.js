var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Ad your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function  appendKitten(name){
  var kitten = [...kittens,name]
  return kitten
}

var kittens = ["Milo", "Otis", "Garfield"]
function  prependKitten(name){
  var kitten = [name,...kittens]
  return kitten
}

var kittens = ["Milo", "Otis", "Garfield"]
function  removeLastKitten(name){
  var kitten = kittens.slice(0,kittens.length-1)
  return kitten
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten() {
  return kittens.slice(1)
}
