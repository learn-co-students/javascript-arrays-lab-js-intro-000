var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift(name);
}
function appendKitten(name) {
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}
function prependKitten(name) {
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;
}
function removeLastKitten() {
  return kittens.slice(0, -1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}