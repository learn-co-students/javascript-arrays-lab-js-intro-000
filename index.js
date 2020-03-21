var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten() {
  var kittens2 = kittens.slice(0,-1);
  return kittens2;
}

function removeFirstKitten() {
  var kittens3 = kittens.slice(1);
  return kittens3;
}

function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens = [name, ...kittens];
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
