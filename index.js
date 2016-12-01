const app = "I don't do much."
var kittens = ["Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var maorKittens = [...kittens, name]
  return maorKittens
}

function prependKitten(name){
  var maorKittens = [name, ...kittens]
  return maorKittens
}

function removeLastKitten(name){
  var maorKittens = kittens.slice(0,kittens.length-1)
  return maorKittens
}

function removeFirstKitten(name){
  var maorKittens = kittens.slice(1)
  return maorKittens
}
