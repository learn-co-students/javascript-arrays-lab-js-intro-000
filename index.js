const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;

}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1);
  return kittens;
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = [name, ...kittens ];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
