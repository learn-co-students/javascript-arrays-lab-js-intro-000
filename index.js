var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var new_kittens = [...kittens,name]
  return new_kittens
}

function prependKitten(name) {
  var new_kittens = [name,...kittens]
  return new_kittens
}

function removeLastKitten() {
  var new_kittens = kittens.slice(0,kittens.length - 1)
  return new_kittens
}

function removeFirstKitten() {
  var new_kittens = kittens.slice(1)
  return new_kittens
}
