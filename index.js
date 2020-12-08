var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyAppendKitten(Zen) {
 return kittens.push(Zen)
}
function destructivelyPrependKitten(Zen) {
  return kittens.unshift(Zen)
}
// Add your functions and code here
function destructivelyRemoveLastKitten(Garfield) {
  return kittens.pop(Garfield)
}
function prependKitten(Zen) {
  return [Zen, ...kittens]
}
function destructivelyRemoveFirstKitten(Garfield) {
  return kittens.shift(Garfield)
}
function appendKitten(Zen) {
  return[...kittens, Zen]
}
function removeLastKitten(Garfield) {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(Milo) {
    return kittens.slice(1)
}
