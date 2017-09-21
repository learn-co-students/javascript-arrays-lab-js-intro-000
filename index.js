var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(Catz) {
  kittens.push(Catz);
  return kittens
}
function destructivelyPrependKitten(Catz) {
  kittens.unshift(Catz);
  return kittens
}
function destructivelyRemoveLastKitten(Catz) {
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten(Catz) {
  kittens.shift();
  return kittens
}
function appendKitten(Catz) {
  return [...kittens, Catz]
}
function prependKitten(Catz) {
  return [Catz, ...kittens]
}
function removeLastKitten(Catz) {
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten(Catz) {
  return kittens.slice(1)
}
