const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
};

function appendKitten(name) {
  var n = [...kittens, name];
  return n;
};

function prependKitten(name) {
  var n = [name, ...kittens];
  return n;
};

function removeLastKitten(name) {
  var n = kittens.slice(0, kittens.length -1);
  return n;
};

function removeFirstKitten(name) {
  var n = kittens.slice(1);
  return n;
};
