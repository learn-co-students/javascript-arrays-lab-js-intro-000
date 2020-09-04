var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten() {
  return kittens.pop("Ralph")
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift("Bob")
}
function appendKitten(name) {
  return kittens.concat("Broom")
}
function prependKitten(name) {
  return ["Arnold",...kittens]
}
function removeLastKitten(array) {
  array = kittens.slice(0, kittens.length -1)
  return array
}
function removeFirstKitten(array) {
  array = kittens.slice(1)
  return array
}
