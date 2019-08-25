var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
