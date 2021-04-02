var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newCats = kittens.concat(name)
  return newCats
}

function prependKitten(name) {
  var newCats = [name, ...kittens]
  return newCats
}

function removeLastKitten() {
  var newCats = [...kittens]
  newCats.pop()
  return newCats
}

function removeFirstKitten() {
  var newCats = [...kittens]
  newCats.shift()
  return newCats
}
