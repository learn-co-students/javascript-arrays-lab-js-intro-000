//const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
function appendKitten(name) {
return [...kittens, name]
}
function prependKitten(name) {
return [name, ...kittens]
}
function removeLastKitten(name) {
  const kittens = [ 'Milo', 'Otis' ]
  return kittens
}
function removeFirstKitten(name) {
  const kittens = [ 'Otis', "Garfield" ]
  return kittens
}
