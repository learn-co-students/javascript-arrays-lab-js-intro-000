var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function(name) {
  var ar1 = [name];
  var arCon = kittens.concat(ar1);
  return arCon;
}

var prependKitten = function(name) {
  var ar1 = [name];
  var arCon = ar1.concat(kittens);
  return arCon;
}

var removeLastKitten = function() {
  var newKittens = kittens.slice(0,2);
  return newKittens;
}

var removeFirstKitten = function() {
  var firstKitten = kittens.slice(1,3);
  return firstKitten;
}
