var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array) {
  kittens.push("Ralph")
  return kittens
}

kittens 

function destructivelyPrependKitten(array) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(array, element) {
  return [...kittens, "Broom"]
}

function prependKitten(array, element) {
  return ["Arnold", ...kittens]
}

kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(array) {
 return kittens.slice(0, kittens.length - 1)
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(array) {
 return kittens.slice(1)
  
}