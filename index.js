var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a) {
  kittens.push(a)
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyPrependKitten(a) {
  kittens.unshift(a)
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function appendKitten(a) {
  return kittens.concat(a)
}


function prependKitten(a) {
  return [a, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
