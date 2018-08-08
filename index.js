// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}
destructivelyAppendKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}
destructivelyPrependKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
destructivelyRemoveLastKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
destructivelyRemoveFirstKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
var moreKittens = ['Broom'];
function appendKitten() {
  return (kittens.concat(moreKittens));
}
appendKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
var firstKitten = ['Arnold'];
function prependKitten() {
  return (firstKitten.concat(kittens));
}
prependKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
  return (kittens.slice(0, kittens.length - 1));
}
removeLastKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten() {
  return (kittens.slice(1, kittens.length));
}
removeFirstKitten()
