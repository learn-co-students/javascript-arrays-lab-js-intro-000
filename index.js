const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return name
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop('Garfield')
  return name
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift('Milo')
  return name
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1);
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  kittens.slice(1);
  return kittens.slice(1)
}
