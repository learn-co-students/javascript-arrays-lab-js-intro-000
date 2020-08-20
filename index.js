var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here
function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens;
}
function destructivelyPrependKitten(Ralph){
  kittens.unshift(Ralph)
}
function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop(Garfield)
}
function destructivelyRemoveFirstKitten(Milo){
  kittens.shift(Milo)
}
function appendKitten (Broom) {
  var i = [...kittens, Broom]
  return i ;
}
function prependKitten(Jeff) {
  var y = [Jeff, ...kittens]
  return y
}
function removeLastKitten(kitten) {
  var a = kittens.slice(0, -1)
  return a
}
function removeFirstKitten() {
  var b = kittens.slice(1)
  return b
}
// Add your functions and code here
