const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

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
  var oxt = [name];
  var neww = kittens.concat(oxt);
  return neww;
}

function prependKitten(name) {
  var oxt = [name];
  var neww = oxt.concat(kittens);
  return neww;
}

function removeLastKitten() {
  var x = kittens.unshift();
  var neww = kittens.slice(0, x - 1);
  return neww;
}

function removeFirstKitten() {
  var x = kittens.unshift();
  var neww = kittens.slice(1, x);
  return neww;
}
