const app = "I don't do much."
var kittens =["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return name
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return name
}
