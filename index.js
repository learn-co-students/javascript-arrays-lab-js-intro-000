var kittens = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendKitten(kitteh) {
  kittens.push(kitteh)
}

function destructivelyPrependKitten(haz) {
  kittens.unshift(haz)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()  /* were any kittens harmed? */
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1)  /* what if they don't want to? */
}

function appendKitten(cheez) {
  return [...kittens, cheez]
}

function prependKitten(burger) {
  return [burger, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}


// Add your functions and code here
