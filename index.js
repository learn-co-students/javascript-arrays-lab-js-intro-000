var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten)
}

function appendKitten(kitten) {
  return kittens.concat([kitten])
}

function prependKitten(kitten) {
  return [kitten].concat(kittens)
}

function removeLastKitten(kitten) {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(kitten) {
  return kittens.slice(1)
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
