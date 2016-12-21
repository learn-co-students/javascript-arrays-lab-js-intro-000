const app = "I don't do much."

function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

function destructivelyRemoveLastKitten () {
  return kittens.pop();
}

function destructivelyPrependKitten (name) {
  return kittens.unshift (name);
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift();
}

function appendKitten (name) {
var newArray = [...kittens, name];
return newArray;
}

function prependKitten (name) {
  var newArrayTwo = [name, ...kittens];
  return newArrayTwo;
}

function removeLastKitten () {
  var newArrayThree = kittens.slice(0, kittens.length - 1);
  return newArrayThree
}

function removeFirstKitten () {
  var newArrayFour = kittens.slice(1);
  return newArrayFour;
}
