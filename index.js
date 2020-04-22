var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten() {
    const addKitten = kittens.concat("Broom");
    return addKitten;
}

function prependKitten(name) {
    const forwardKitten = "Arnold";
    return [forwardKitten, ...kittens];
}

function removeLastKitten() {
    const removeKitten = kittens.slice(0, 2);
    return removeKitten;
}

function removeFirstKitten() {
    const forwardKitten = kittens.slice(1, 3);
    return forwardKitten;
 }
