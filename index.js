var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten (name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
}

function appendKitten (name) {
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray;
}

function prependKitten (name) {
  var newKittens = [...kittens]
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten () {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten () {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}
