// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
  function destructivelyRemoveLastKitten(name) {
  kittens.pop(2);
}

var kittens = ["Milo", "Otis", "Garfield"];
  function destructivelyRemoveFirstKitten(name) {
  kittens.shift(1);
}

var kittens = ["Milo", "Otis", "Garfield"];
  function appendKitten(name) {
  var moreKittens = kittens.concat(name);
  return moreKittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
  function prependKitten(name) {
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
  function removeLastKitten() {
    var moreKittens = kittens.slice(0,2);
    return moreKittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
  function removeFirstKitten() {
    var moreKittens = kittens.slice(1,3);
    return moreKittens;
}
