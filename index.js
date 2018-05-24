const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {

  var newKittens = kittens.push(name);
  return newKittens;
}

function destructivelyPrependKitten(name) {
  var newKittens = kittens.unshift(name);

  return newKittens;
}

function destructivelyRemoveLastKitten() {
  var newKittens = kittens.pop();

  return newKittens;
}

function destructivelyRemoveFirstKitten() {

kittens.shift();
var newKittens =  kittens
  return newKittens;
}

function appendKitten(name) {


  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1 )

  return newKittens;
}

function removeFirstKitten() {

  var newKittens = kittens.slice(1);

  return newKittens;
}
