const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
 var addKitten = [...kittens, name]
return addKitten
}
function prependKitten(name) {
 var addKitten = [name, ...kittens]
return addKitten
}
function removeLastKitten() {
  var removeKitten = kittens.slice(0, kittens.length -1);
  return removeKitten
}
function removeFirstKitten() {
  var removeKitten = kittens.slice(1);
  return removeKitten
}