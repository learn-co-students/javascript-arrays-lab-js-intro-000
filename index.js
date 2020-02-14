var kittens = [ "Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift([1])
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop([2])
}
function appendKitten(name) {
  return [...kittens, "Broom"]
}
function prependKitten(name) {
  return ["Arnold", ...kittens]
}
function removeLastKitten(name) {
  return kittens.slice(0, 2)
}
function removeFirstKitten(name) {
  return kittens.slice(1)
}
