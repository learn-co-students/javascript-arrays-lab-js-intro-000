var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = [...kittens, "Broom"];
  return newArray;
}

function prependKitten(name) {
  var newArrayAgain = [name, ...kittens];
  return newArrayAgain;
}

function removeLastKitten() {
  var anotherOne = kittens.slice(0, kittens.length-1);
  return anotherOne;
}

function removeFirstKitten() {
  var idk = kittens.slice(1);
  return idk;
}
