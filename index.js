var kittens = ["Milo","Otis","Garfield"] //define your array here

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
  var new_array = [...kittens]
  new_array.push(name)
  return new_array
}

function prependKitten(name) {
  var new_array = [...kittens]
  new_array.unshift(name)
  return new_array
}

function removeLastKitten() {
  var new_array = [...kittens]
  new_array.pop()
  return new_array
}

function removeFirstKitten() {
  var new_array = [...kittens]
  new_array.shift()
  return new_array
}