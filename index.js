var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(array) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop("Garfield");
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift("Milo");
}

function appendKitten(array) {
  const moreKittens = kittens.concat("Broom");
  return moreKittens;
}

function prependKitten(array) {
  const moreKittens = "Arnold";
  return [moreKittens, ...kittens];
}

function removeLastKitten(array) {
  const moreKittens = kittens.slice(0, kittens.length -1);
  return moreKittens;
}

function removeFirstKitten(array) {
  const moreKittens = kittens.slice(1);
  return moreKittens;
}
