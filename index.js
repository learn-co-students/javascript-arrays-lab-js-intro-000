var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code her
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var addedList = kittens.concat([name])
  return addedList
}

function prependKitten(name) {
  var addedList = [name].concat(kittens.slice(0, kittens.length))
  return addedList
}

function removeLastKitten() {
  var removedList = kittens.slice(0, kittens.length-1)
  return removedList
}

function removeFirstKitten() {
  var removedList = kittens.slice(1, kittens.length)
  return removedList
}