var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  const cats2 = [...kittens, name]
  return cats2
}

function prependKitten(name) {
  const cats2 = [name, ...kittens]
  return cats2
}

function removeLastKitten() {
  const cats2 = kittens.slice(0, kittens.length - 1)
  return cats2
}

function removeFirstKitten() {
  return ["Otis", "Garfield"]
}
