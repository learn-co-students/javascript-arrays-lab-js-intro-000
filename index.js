var kittens = ["Milo", "Otis",
 "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newkitten = kittens.concat(name)
  return newkitten
}

function prependKitten(name) {
  var newkittens = [name, ...kittens]
  return newkittens
}

function removeLastKitten() {
  var diffKittens = kittens.slice(0, kittens.length - 1)
  return diffKittens
}


function removeFirstKitten() {
  var diffKitten = kittens.slice(1)
  return diffKitten
}
