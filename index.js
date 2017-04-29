var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

destructivelyPrependKitten("Ralph");

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

destructivelyRemoveLastKitten("Ralph");

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens
}

destructivelyRemoveFirstKitten("Ralph");

function appendKitten(name) {
  return [...kittens, name]
}

appendKitten("Broom");

function prependKitten(name) {
  return [name, ...kittens]
}

prependKitten("Broom");

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

removeLastKitten();

function removeFirstKitten() {
  return kittens.slice(1);
}

removeFirstKitten();
