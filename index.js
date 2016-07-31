const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newCats = [...kittens, name];
  return newCats;
}

function prependKitten(name){
  var newCats = [name, ...kittens];
  return newCats;
}

function removeLastKitten() {
  var newCats = kittens.slice(0, 2);
  return newCats;
}

function removeFirstKitten() {
  var newCats = kittens.slice(1,3);
  return newCats;
}
