const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

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
  var newarray = [...kittens, name]
  return newarray
}

function prependKitten(name){
  var newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten(name){
  var newarray = kittens.slice(0,kittens.length-1)
  return newarray
}

function removeFirstKitten(name){
  var newarray = kittens.slice(1)
  return newarray
}
