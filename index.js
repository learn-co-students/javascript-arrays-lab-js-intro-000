const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
  destructivelyAppendKitten("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
  destructivelyPrependKitten("Bob");
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
  destructivelyRemoveLastKitten("Garfield");
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
  destructivelyRemoveFirstKitten("Milo");
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(name){
  return kittens.slice(1);
}
