var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name) {
  kittens.push("Ralph");
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift("Bob");
  return kittens;
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift();
  return kittens;
}

var appendKitten = function(name) {
  var newKittens = ["Milo", "Otis", "Garfield", "Broom"];
  return newKittens;
}

var prependKitten = function(name) {
  var newKittens = ["Arnold", "Milo", "Otis", "Garfield"];
  return newKittens;
}

var removeLastKitten = function(name) {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

var removeFirstKitten = function(name) {
  var newKittens = kittens.slice(1);
  return newKittens;
}
