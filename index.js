var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  let arr2 = [...kittens, name]
  return arr2
}

function prependKitten(name) {
  let arr2 = [name, ...kittens]
  return arr2
}

function removeLastKitten() {
  let arr2 = kittens.slice(0, kittens.length - 1)
  return arr2
}

function removeFirstKitten() {
  let arr2 = kittens.slice(1, kittens.length)
  return arr2
}
