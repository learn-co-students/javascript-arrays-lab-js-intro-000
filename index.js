//var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten (name) {
   kittens.shift(name);
   return kittens
}

function appendKitten (name) {
  var kittenLitter = [...kittens];
  kittenLitter.push(name);
  return kittenLitter
}

function prependKitten (name) {
  var kittenLitter = [...kittens];
  kittenLitter.unshift(name);
  return kittenLitter
}

function removeLastKitten() {
  var kitties = [...kittens];
  kitties.pop();
  return kitties
}

function removeFirstKitten() {
  var kitties = [...kittens];
  kitties.shift();
  return kitties
}
