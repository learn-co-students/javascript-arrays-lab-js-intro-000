var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
  var newLitter = kittens.concat(name);
  return newLitter;
}

function prependKitten(name){
  var name = [name];
  var newLitter = name.concat(kittens);
  return newLitter;
}

function removeLastKitten() {
  var newLitter = kittens.slice(0, -1);
  return newLitter;
}

function removeFirstKitten() {
  var newLitter = kittens.slice(1);
  return newLitter;
}
