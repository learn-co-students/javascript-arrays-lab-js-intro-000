const app = "I don't do much."

var kittens

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

var kittens

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

var kittens

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

var kittens

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

var kittens

function appendKitten(name) {
  var newkittens = [...kittens, name];
  return newkittens;
}

function prependKitten(name) {
  var newkittens = [name, ...kittens];
  return newkittens;
}


function removeLastKitten(name) {
  var newkittens = kittens.slice(0, kittens.length -1);
  return newkittens;
}


function removeFirstKitten(name) {
  var newkittens = kittens.slice(1);
  return newkittens;
}
