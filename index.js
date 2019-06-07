var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

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
  var newkittens = [name];
  return kittens.concat(newkittens);
  return kittens;
}

function prependKitten(name) {
  var newkittens = [name];
  return newkittens.concat(kittens);
  return kittens;
}

function removeLastKitten() {
  return kittens.slice(0,-1);
  return kittens;
}

function removeFirstKitten() {
  return kittens.slice(1);
  return kittens;
}
