const app = "I don't do much."

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten () {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function appendKitten(name) {
  var c = [...kittens,name]
  return c
}

function prependKitten(name) {
  var c = [name, ...kittens]
  return c
}

function removeLastKitten() {
  var kit = kittens.slice(0,kittens.length-1)
  return kit
}

function removeFirstKitten() {
  var kit = kittens.slice(1)
  return kit
}
