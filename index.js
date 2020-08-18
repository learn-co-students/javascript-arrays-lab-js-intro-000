var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(Ralph) {
  kittens.pop(4)
  return kittens
}

function destructivelyRemoveFirstKitten(Bob) {
  kittens.shift(0)
  return kittens
}

function appendKitten(Broom) {
  return [...kittens, "Broom"]
}

function prependKitten(Arnold) {
  return ["Arnold", ...kittens]
}

function removeLastKitten(array) {
  array = kittens.slice(0, kittens.length -1)
  return array
}

function removeFirstKitten(array) {
  array = kittens.slice(1)
  return array
}
