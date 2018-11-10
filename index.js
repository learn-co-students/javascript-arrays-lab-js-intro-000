var kittens = ['Milo', 'Otis', 'Garfield']
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
  return kittens
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(array) {
  return [...kittens,array]
}
function prependKitten(array) {
  return [array, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
