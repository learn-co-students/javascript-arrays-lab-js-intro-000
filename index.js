var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newKitty = [name];
  var newKittyList = kittens.concat(newKitty);
  return newKittyList;
}

function prependKitten(name) {
  var newKitty = [name];
  var newKittyList = newKitty.concat(kittens);
  return newKittyList;
}

function removeLastKitten() {
  var smallList = kittens.slice(0, kittens.length - 1);
  return smallList;

}

function removeFirstKitten() {
  var smallList = kittens.slice(1);
  return smallList;
}
