var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift(name)
}

function appendKitten (name) {
  var array2 = [name]
  return kittens.concat(array2)
}

function prependKitten (name) {
  var array2 = [name]
  return array2.concat(kittens)
}

function removeLastKitten () {
  var array2 = kittens.slice(0,kittens.length-1)
  return array2
}

function removeFirstKitten () {
  var array2 = kittens.slice(1)
  return array2
}
