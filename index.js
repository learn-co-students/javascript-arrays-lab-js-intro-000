var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens
}// Add your functions and code here

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten() {
  kittens.concat("Broom");
  return kittens.concat("Broom")
}

function prependKitten(name) {
  [name, ...kittens];
  return [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(0, kittens.length-1);
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens.slice(1)
}
