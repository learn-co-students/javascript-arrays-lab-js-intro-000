const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

// destructively appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name)
}
// destructively prepends a kitten to the beginning of the kittens array:
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
// destructively removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
// destructively removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten(){
  kittens.shift(1)
}
// Nondestructively appends a kitten to the kittens array and retu
// rns a new array, leaving the kittens array unchanged:
function appendKitten(name) {
  return [...kittens, name]
}
// Nondestructively prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name) {
  return [name, ...kittens]
}
//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged:
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

// removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
function removeFirstKitten() {
  return kittens.slice(1)
}
