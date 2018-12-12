var kittens = ["Milo", "Otis", "Garfield"]
 function destructivelyAppendKitten(chunk) {
  kittens.push(chunk)
}
 function destructivelyPrependKitten(chunk) {
  kittens.unshift(chunk)
}
 function destructivelyRemoveLastKitten() {
  kittens.pop()
}
 function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
 function appendKitten(chunk) {
  return [...kittens, chunk]
}
 function prependKitten(chunk) {
  return [chunk, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
