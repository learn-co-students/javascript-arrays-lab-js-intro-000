const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var kittensArray = [...kittens, name];
  return kittensArray
}

function prependKitten(name) {
  var kittensArray = [name, ...kittens];
  return kittensArray
}

function removeLastKitten() {
  var kittensArray = kittens.slice(0, kittens.length - 1);
  return kittensArray
}

function removeFirstKitten() {
  var kittensArray = kittens.slice(1);
  return kittensArray
}
