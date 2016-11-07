var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
 kittens.shift(name)
}
function appendKitten(name) {
  var cats = [...kittens, name]
  return cats
}
function prependKitten(name) {
  var cats = [name, ...kittens]
  return cats
}
function removeLastKitten(name) {
  var cats = kittens.slice(0, kittens.length -1)
  return cats
}
function removeFirstKitten(name) {
  var cats = kittens.slice(1)
  return cats
}
