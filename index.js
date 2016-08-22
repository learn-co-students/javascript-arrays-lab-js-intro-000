const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop("Ralph");
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift("Milo")
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, -1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
