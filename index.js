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
  var tempArray = [...kittens, name];
  return tempArray;
}

function prependKitten(name) {
  var tempArray = [name, ...kittens];
  return tempArray;
}

function removeLastKitten() {
  var tempArray = kittens.slice(0, kittens.length-1);
  return tempArray;
}

function removeFirstKitten() {
  var tempArray = kittens.slice(1);
  return tempArray;
}
