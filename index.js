const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  var newLength = kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name){
  var newLength = kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  var last = kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  var first = kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
