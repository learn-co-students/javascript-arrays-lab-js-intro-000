const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
kittens.push("Ralph");
return kittens;

}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;

}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;

}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;

}

function appendKitten(name) {
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = ["Arnold", ...kittens];
  return newKittens;

}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;

}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1)
  return newKittens;

}
