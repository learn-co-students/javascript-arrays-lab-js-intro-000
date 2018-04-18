const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return(kittens);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return(kittens);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return(kittens);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return(kittens);
}

function appendKitten(name) {
  var kittens2 = [...kittens,name];
  return(kittens2);
}

function prependKitten(name) {
  var kittens2 = [name,...kittens];
  return(kittens2);
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0,kittens.length-1);
  return(kittens2);
}

function removeFirstKitten() {
  var kittens2 = kittens.slice(1,kittens.length);
  return(kittens2);
}
