const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
};


function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  var newK = kittens.slice(0, kittens.length);
  newK.shift();
  return newK;
}
