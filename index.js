const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function appendKitten(name) {
  let newArray = kittens;
  return [...newArray, name];
}

function prependKitten(name) {
  let anotherArray = kittens;
  return [name, ...anotherArray];
}

function removeLastKitten() {
  let cats = kittens;
  return cats.slice(0, cats.length - 1);
}

function removeFirstKitten() {
  let cats = kittens;
  return cats.slice(1);
}
