var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
var newKittensArray = kittens.slice();
newKittensArray.push(name)
return newKittensArray;
}


function prependKitten(name) {
  var newKittensArray = kittens.slice();
  newKittensArray.unshift(name);
  return newKittensArray;
}

function removeLastKitten() {
  var newKittensArray = kittens.slice()
  newKittensArray.pop()
  return newKittensArray;
}

function removeFirstKitten() {
  var newKittensArray = kittens.slice();
  newKittensArray.shift()
  return newKittensArray;
}
