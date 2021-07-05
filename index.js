var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(newKit) {
  kittens.push(newKit);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1);
  return newKittens;
}
function removeFirstKitten() {
  var newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}
