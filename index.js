var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code her
function destructivelyAppendKitten () {
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten () {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}
function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten (elem) {
  var newArr = [...kittens, elem]
  return newArr
}

function prependKitten (elem) {
  var newArr = [elem, ...kittens]
  return newArr
}

function removeLastKitten () {
  var newArr = kittens.slice(0, kittens.length-1)
  return newArr
}

function removeFirstKitten () {
  var newArr = kittens.slice(1)
  return newArr
}
