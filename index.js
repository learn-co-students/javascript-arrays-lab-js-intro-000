var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var more_kittens = [...kittens, name];
  return more_kittens;
}

function prependKitten(name) {
  var more_kittens = [name, ...kittens];
  return more_kittens;
}

function removeLastKitten() {
  var less_kittens = kittens.slice(0, kittens.length - 1);
  return less_kittens;
}

function removeFirstKitten() {
  var less_kittens = kittens.slice(1, kittens.length);
  return less_kittens;
}
