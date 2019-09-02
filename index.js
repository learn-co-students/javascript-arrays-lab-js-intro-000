var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
  kittens.pop(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
  kittens.shift(name)
}

function destructivelyRemoveLastKitten() {
  var poppedKitten = kittens.pop()
  return kittens
  kittens.push(poppedKitten)
}

function destructivelyRemoveFirstKitten() {
  var shiftedKitten = kittens.shift()
  return kittens
  kittens.unshift(shiftedKitten)
}

function appendKitten(name) {
  var newKittenArray = [...kittens]
  newKittenArray.push(name);
  return newKittenArray;
}

function prependKitten (name) {
  var newKittenArray = [...kittens]
  newKittenArray.unshift(name);
  return newKittenArray;
}

function removeLastKitten() {
  var newKittenArray = [...kittens]
  newKittenArray.pop();
  return newKittenArray;
}

function removeFirstKitten() {
  var newKittenArray = [...kittens]
  newKittenArray.shift();
  return newKittenArray;
}
