const app = "I don't do much."
const kittens =["Milo","Otis","Garfield"]

//appends a kitten to the end of the kitten array
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
//prepends a kitten to the beginning of the kitten array
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
//removes the first kitten from the kitten array
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
//appends a kitten to the kitten array & returns a new array. Leaving unchanged
function appendKitten(name) {
  return [...kittens, name]
}
//prepends a kitten to the kitten array and returns a new array. Leaving unchanged
function prependKitten(name) {
  return [name, ...kittens]
}
//removes the last kitten in the kittens array and returns new array. Leaving unchanged
function removeLastKitten() {
  return kittens.slice (0, kittens.length -1)
}
//removes the first kitten in the kitten array and returns new array
function removeFirstKitten() {
  return kittens.slice(1)
}
