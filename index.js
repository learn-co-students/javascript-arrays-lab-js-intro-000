const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  return kittens;
}

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop(name);
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift(name);
  return kittens;
}

var appendKitten = function(name) {
  var newKitten = kittens.slice();
  newKitten.push(name);
  return newKitten;
}

var prependKitten = function(name) {
  var newKitten = kittens.slice();
  newKitten.unshift(name);
  return newKitten;
}

var removeLastKitten = function(name) {
  var newKitten = kittens.slice();
  newKitten.pop(name);
  return newKitten;
}

var removeFirstKitten = function(name) {
  var newKitten = kittens.slice();
  newKitten.shift(name);
  return newKitten;
}
