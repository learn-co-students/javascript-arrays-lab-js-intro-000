var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

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
  kittens.pop(kittens.length-1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
  return kittens;
}

function appendKitten(name) {
  const newKittenArr = [...kittens, name];
  return newKittenArr;
}

function prependKitten(name) {
  const newKittenArr = [name, ...kittens];
  return newKittenArr;
}

function removeLastKitten() {
  const newKittenArr = kittens.slice(0, -1);
  return newKittenArr;
}

function removeFirstKitten() {
  const newKittenArr = kittens.slice(1);
  return newKittenArr;
}
