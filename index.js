var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newArray = [];
  var otherArray = [];
  newArray.push(name);
  otherArray = kittens.concat(newArray);
  return otherArray;
}

function prependKitten(name) {
  var newArray = [];
  var otherArray = [];
  newArray.push(name);
  otherArray = newArray.concat(kittens);
  return otherArray;
}

function removeLastKitten() {
  return kittens.slice(0, 2);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
