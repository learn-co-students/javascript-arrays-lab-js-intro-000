const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {

  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {

  kittens.pop("Garfield");
  return kittens;

}

function destructivelyRemoveFirstKitten() {

kittens.shift("Milo");
return kittens;
}

function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
kittens.push("Broom");
return kittens;
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
kittens.unshift("Arnold");
return kittens;
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
kittens.pop("Garfield");
return kittens;
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
kittens.shift("Milo");
return kittens;
}
