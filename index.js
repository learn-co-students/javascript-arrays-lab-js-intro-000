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
  var array = [name]
  var arrayNew = kittens.concat(array)
  return arrayNew
}
function prependKitten(name) {
  var array = [name]
  var arrayNew = array.concat(kittens)
  return arrayNew
}
function removeFirstKitten() {
  var arrayNew = kittens.slice(1)
  return arrayNew
}
function removeLastKitten() {
  return kittens.slice(0, 2)
}
