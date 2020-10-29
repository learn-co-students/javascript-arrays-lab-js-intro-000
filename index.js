var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten () {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten () {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop("?")
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift("Bob")
  return kittens
}

function appendKitten () {
  return kittens.concat("Broom")
}

function prependKitten () {
  return ["Arnold", ...kittens]
}

function removeLastKitten () {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten () {
  return kittens.slice(1)
}
// Add your functions and code here
