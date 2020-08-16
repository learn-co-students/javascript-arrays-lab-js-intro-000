var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
};

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let x = [...kittens, name];
  return x;
}

function prependKitten(name) {
  let x = [name, ...kittens];
  return x;
}

function removeLastKitten() {
  let x = kittens.slice(0, kittens.length-1);
  return x;
}

function removeFirstKitten() {
  let x = kittens.slice(1);
  return x;
}
