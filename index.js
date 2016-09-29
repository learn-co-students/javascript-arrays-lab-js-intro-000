const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var kittensCopy = kittens.slice()
  kittensCopy.push(name)
  return kittensCopy
}

function prependKitten(name) {
  var kittensCopy = kittens.slice()
  kittensCopy.unshift(name)
  return kittensCopy
}

function removeLastKitten() {
  var kittensCopy = kittens.slice()
  kittensCopy.pop()
  return kittensCopy
}

function removeFirstKitten() {
  var kittensCopy = kittens.slice()
  kittensCopy.shift()
  return kittensCopy
}
