const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var catName = name;
  kittens.push(catName);
  return kittens
}

function destructivelyPrependKitten(name) {
  var catName = name;
  kittens.unshift(catName)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens;
}

function appendKitten(name) {
  var catName = name;
  var newKittens = [...kittens, catName];
  return newKittens;
}

function prependKitten(name) {
  var catName = name;
  var newKittens = [catName, ...kittens];
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(-2)
  return newKittens
}
