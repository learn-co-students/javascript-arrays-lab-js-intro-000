const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
    var kitten = kittens.push(name);
    return kitten
}
function destructivelyPrependKitten(name) {
  var kitten = kittens.unshift(name);
  return kitten
}

function destructivelyRemoveLastKitten() {
  var kitten = kittens.pop();
  return kitten
}

function destructivelyRemoveFirstKitten() {
  var kitten = kittens.shift();
  return kitten
}
function appendKitten(name) {
var kitten = [...kittens, name];
return kitten
}

function prependKitten(name){
  var kitten = [name, ...kittens];
  return kitten
}

function removeLastKitten() {
  var kitten = kittens.slice(0, kittens.length -1);
  return kitten
}

function removeFirstKitten() {
  var kitten = kittens.slice(1, kittens.length);
  return kitten;
}