const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

// function kittens(v) {
//   var kittens = ["Milo", "Otis", "Garfield"];
//   return kittens;
// }

function destructivelyAppendKitten(name) {
  kittens.push(name);
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
  var v;
  v = [...kittens, name];
  return v;
}

function prependKitten(name) {
  var v;
  v = [name, ...kittens];
  return v;
}

function removeLastKitten() {
  var v;
  v = kittens.slice(0, kittens.length - 1);
  return v;
}

function removeFirstKitten() {
  var v;
  v = kittens.slice(1, kittens.length);
  return v;
}
