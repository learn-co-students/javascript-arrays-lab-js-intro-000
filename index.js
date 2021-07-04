var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

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
  const moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  const moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  const moreKittens = kittens.slice(0, 2);
  return moreKittens;
}

function removeFirstKitten() {
  const moreKittens = kittens.slice(1);
  return moreKittens;
}// Add your functions and code here
