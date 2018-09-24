// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name); // append to end of array
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name); // append to beginning of array
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(); // remove last item in array
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(); // remove first item in array
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens, name]; // add item to end, save to new array
  return moreKittens; // return new array
  return kittens;
}

function prependKitten(name) {
  var newKitten = [name, ...kittens]; // add item to beginning, save to new array
  return newKitten; // return new array
  return kittens;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, kittens.length - 1); // remove last item, save to new array
  return lastKitten;
  return kittens;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1); // remove first item, save to new array
  return firstKitten;
  return kittens;
}
