var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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

function appendKitten(name) {
  var cat = [...kittens, name]
  return cat
}

function prependKitten(name) {
  var car = [name, ...kittens]
  return car
}

function removeLastKitten() {
  var last = kittens.slice(0, kittens.length - 1)
  return last
}

function removeFirstKitten() {
  var she = kittens.slice(1)
  return she
}
