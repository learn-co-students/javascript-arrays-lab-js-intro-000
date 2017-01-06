const app = "I don't do much."
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}
function appendKitten(name) {
  var lastKittens = [...kittens, name]
  return lastKittens
}
function prependKitten(name) {
  var firstKittens = [name, ...kittens]
  return firstKittens
}
function removeLastKitten(name) {
  var benchKitten = kittens.slice(0, kittens.length - 1)
  return benchKitten
}
function removeFirstKitten(name) {
  var startKitten = kittens.slice(1)
  return startKitten
}
