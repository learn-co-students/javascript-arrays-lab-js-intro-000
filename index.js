const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n) {
    var c = kittens.push(n);
    return c;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(n) {
    var c = kittens.unshift(n);
    return c;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(n) {
    var c = kittens.pop(n);
    return c;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(n) {
    var c = kittens.shift(n);
    return c;
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(n) {
  var c = [...kittens, n];
  return c;
}

function prependKitten(n) {
  var c = [n, ...kittens];
  return c;
}

function removeLastKitten(n) {
  var c = kittens.slice(0, kittens.length - 1)
  return c;
}

function removeFirstKitten() {
  var c = kittens.slice(1);
  return c;
}
