const app = "I don't do much.";

//1
var kittens = ["Milo", "Otis", "Garfield"];

//2
function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

//3
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

//4
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

//5
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//6
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

//7
function prependKitten(name) {
  var newKittens = [name,...kittens];
  return newKittens;
}

//8
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

//9
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
