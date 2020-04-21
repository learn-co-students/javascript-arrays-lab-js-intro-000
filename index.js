var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
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

function appendKitten(element) {
  var newKittens = kittens.concat(element)
  return newKittens
}

function prependKitten(element) {
  var newKittens = [element, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}