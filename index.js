const app = "I don't do much."
let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function appendKitten(name){
  var kittenAppend = [...kittens, name];
  return kittenAppend;
}

function prependKitten(name) {
  var kittenPrepend = [name, ...kittens];
  return kittenPrepend;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
