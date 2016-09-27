var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  var newKittens = kittens
  newKittens.push(name)
  return newKittens
}

function destructivelyPrependKitten(name) {
  var newKittens = kittens
  newKittens.unshift(name)
  return newKittens
}

function destructivelyRemoveLastKitten(name) {
  var newKittens = kittens
  newKittens.pop(name)
  return newKittens
}

function destructivelyRemoveFirstKitten(name) {
  var newKittens = kittens
  newKittens.shift(name)
  return newKittens
}

function appendKitten(name) {
  const moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name) {
  const moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten(name) {
  const lessKittens = kittens.slice(0, kittens.length - 1)
  return lessKittens
}

function removeFirstKitten(name) {
  const lessKittens = kittens.slice(1)
  return lessKittens
}
