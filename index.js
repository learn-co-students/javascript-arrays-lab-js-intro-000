var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  var narray = [...kittens, name]
  return narray
}

function prependKitten(name) {
  var narray = [name, ...kittens]
  return narray
}

function removeLastKitten(name) {
  var narray = kittens.slice(0,-1)
  return narray
}

function removeFirstKitten(name) {
  var narray = kittens.slice(1)
  return narray
}
