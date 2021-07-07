var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return (kittens.push(name));
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  return (kittens.unshift(name));
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return (kittens);
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return (kittens);
}

kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return ([...kittens, name]);
}

kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return ([name, ...kittens]);
}

kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  return (kittens.slice(0, kittens.length - 1));
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return (kittens.slice(1));
}
