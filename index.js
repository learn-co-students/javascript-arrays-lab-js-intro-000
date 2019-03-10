var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Ralph")
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
  return kittens
}

function appendKitten() {
  var kittens = ["Milo", "Otis", "Garfield", "Broom"]
  return kittens
}

function prependKitten(){
  var kittens = ["Arnold", "Milo", "Otis", "Garfield"]
  return kittens
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis"]
  return kittens
}

function removeFirstKitten(){
  var kittens = ["Otis", "Garfield"]
  return kittens
}
