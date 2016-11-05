function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten()  {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var addKittenToEnd = [...kittens, name];
  return addKittenToEnd;
}

function prependKitten(name) {
  var addKittenToBeginning = [name, ...kittens];
  return addKittenToBeginning;
}

function removeLastKitten()  {
  var removeLastKitty = kittens.slice(0, kittens.length - 1);
  return removeLastKitty;
}

function removeFirstKitten() {
  var removeFirstKitty = kittens.slice(1);
  return removeFirstKitty;
}
